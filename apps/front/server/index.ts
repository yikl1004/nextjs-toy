/**
 * @note
 * express, cors 패키지 사용 중
 */

import express from 'express'
import next from 'next'
import { errorMiddleware } from 'server/errorMiddleware'

// const port = process.env.PORT || 3100
const dev = process.env.NODE_ENV === 'development'

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp
	.prepare()
	.then(() => {
		const server = express()
		server.set('port', process.env.PORT || 3100)
		server.set('host', process.env.HOST || '0.0.0.0')

		server.all('*', (req, res) => {
			return handle(req, res)
		})

		server.use(errorMiddleware)

		server.listen(server.get('port'), server.get('host'), () => {
			// eslint-disable-next-line no-console
			console.log(
				`Running on host ${server.get('host')} & port ${server.get('port')}, dev: ${dev}`,
			)
		})
	})
	.catch((err) => {
		throw new Error('Failed to Next App Running')
	})
