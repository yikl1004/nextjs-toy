/**
 * @note
 * express, cors 패키지 사용 중
 */

require('../.pnp.cjs').setup()

const express = require('express')
const next = require('next')

const port = process.env.PORT || 3100
const dev = process.env.NODE_ENV === 'development'

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
	const server = express()

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
		if (err) throw err

		// eslint-disable-next-line no-console
		console.log(`Running on port ${port}, dev: ${dev}`)
	})
})
