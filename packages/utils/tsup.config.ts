import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.{ts,tsx}', 'src/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
	dts: true,
	outDir: './dist',
	clean: true,
	format: ['cjs', 'esm'],
	treeshake: true,
	splitting: true,
	cjsInterop: true,
	sourcemap: true,
})
