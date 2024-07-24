'use client'

import { useEffect, useRef } from 'react'
import { isClient, identity, isString } from '@repo/utils'

const ignorePaths: (string | RegExp)[] = [
	'/api/',
	'/_next/',
	/\.(png|jpg|gif|ico|css|ttf)$/i,
	'/__nextjs_original-stack-frame',
	'/app-playground',
	'/manifest.webmanifest',
	'/__nextjs_launch-editor',
]
const ignoreOrigins = ['https://fonts.googleapis.com']
const ignoreProtocols = ['chrome-extension:']

export function MSWRunner() {
	const isStart = useRef<boolean>()

	const checkPathname = (path: string) => {
		return ignorePaths.some((item) => {
			return (
				(item instanceof RegExp && item.test(path)) ||
				(isString(item) && path.startsWith(item))
			)
		})
	}

	const checkOrigin = (origin: string) => ignoreOrigins.some((item) => Object.is(item, origin))

	const checkProtocol = (protocol: string) =>
		ignoreProtocols.some((item) => Object.is(item, protocol))

	useEffect(() => {
		const notRunning = !isStart.current
		const isMocking = Object.is(process.env.NEXT_PUBLIC_API_MOCKING, 'enabled')

		if (notRunning && isClient() && isMocking) {
			isStart.current = true
			// 클라이언트 에서만 실행 시키고 서버용은 별도 실행
			import('@mocks/browser')
				.then(async ({ worker }) => {
					await worker.start({
						onUnhandledRequest(req, print) {
							const { pathname, origin, protocol } = new URL(req.url)

							if (
								[
									checkPathname(pathname),
									checkOrigin(origin),
									checkProtocol(protocol),
								].some(identity)
							) {
								return
							}

							print.warning()
						},
					})
				})
				.catch(() => {
					console.error('API Mocking Error')
				})
		}
	}, [])

	return null
}
