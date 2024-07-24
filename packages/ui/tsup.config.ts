import { defineConfig } from 'tsup'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'

function readFilesRecursively(directory: string) {
	const files: string[] = []

	function read(directory: string) {
		const entries = fs.readdirSync(directory)

		entries.forEach((entry) => {
			const fullPath = path.join(directory, entry)
			const stat = fs.statSync(fullPath)

			if (stat.isDirectory()) read(fullPath)
			else files.push(fullPath)
		})
	}

	read(directory)
	return files
}

async function addDirectivesToChunkFiles(distPath = 'dist'): Promise<void> {
	try {
		const files = readFilesRecursively(distPath)

		for (const file of files) {
			/**
			 * Skip chunk, sourcemap, other clients
			 * */
			const isIgnoreFile = /\.(d\.ts|map|d\.cts)$/g.test(file)

			if (isIgnoreFile) {
				console.log(`⏭️ Directive 'use client'; has been skipped for ${file}`)
				continue
			}

			const filePath = path.join('', file)
			const data = await fsPromises.readFile(filePath, 'utf8')
			const updatedContent = `"use client";\n${data}`

			await fsPromises.writeFile(filePath, updatedContent, 'utf8')

			console.log(`💚 Directive 'use client'; has been added to ${file}`)
		}
	} catch (err) {
		// eslint-disable-next-line no-console -- We need to log the error
		console.error('⚠️ Something error:', err)
	}
}

export default defineConfig({
	entry: ['src/index.{ts,tsx}', 'src/*.{ts,tsx}', 'src/**/*.{ts,tsx}', 'src/**/**/*.{ts,tsx}'],
	dts: true,
	outDir: 'dist',
	clean: true,
	format: ['cjs', 'esm'],
	treeshake: true,
	splitting: true,
	cjsInterop: true,
	sourcemap: true,
	// esbuildOptions(options) {
	// 	options.banner = {
	// 		js: '"use client";',
	// 	}
	// },
	onSuccess: async () => {
		await addDirectivesToChunkFiles()
	},
})
