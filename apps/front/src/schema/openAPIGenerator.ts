import { resolve, join } from 'path'
import { generate, HttpClient } from 'openapi-typescript-codegen'
import dotenv from 'dotenv'
import { expand } from 'dotenv-expand'

expand(dotenv.config())

const urls = [
	{
		path: `${process.env.NEXT_PUBLIC_APP_API}/apidocs.json/Non%20Security%20Open%20Api`,
		folderName: 'non-auth',
	},
	{
		path: `${process.env.NEXT_PUBLIC_APP_API}/apidocs.json/Security%20Open%20Api`,
		folderName: 'auth',
	},
]
const outputPath = (folderName: string) => resolve(join(__dirname, `./${folderName}`))

async function swaggerModelGenerate(input: string, folderName: string) {
	try {
		await generate({
			input,
			output: outputPath(folderName),
			httpClient: HttpClient.FETCH,
			exportCore: false,
			exportServices: false,
			exportModels: true,
			useOptions: true,
			useUnionTypes: true,
			exportSchemas: false,
		})
	} catch (err) {
		console.error(err)
	}
}

Promise.all(
	urls.map(({ path, folderName }) => {
		return swaggerModelGenerate(path, folderName)
	}),
)
	.then(() => console.log(`🚀 model 생성 완료`))
	.catch((err) => {
		console.error('😢 model 생성 실패')
	})
