/* eslint-disable no-underscore-dangle */

import { defaultCache } from '@serwist/next/worker'
import { Serwist } from 'serwist'
import type { HandlerDidErrorCallbackParam, PrecacheEntry, SerwistGlobalConfig } from 'serwist'

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
	interface WorkerGlobalScope extends SerwistGlobalConfig {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		__SW_MANIFEST: (PrecacheEntry | string)[] | undefined
	}
}

declare const self: ServiceWorkerGlobalScope

// const revision = crypto.randomUUID()

const serwist: Serwist = new Serwist({
	precacheEntries: self.__SW_MANIFEST,
	skipWaiting: true,
	clientsClaim: true,
	navigationPreload: true,
	runtimeCaching: defaultCache,
	fallbacks: {
		entries: [
			{
				url: '/~offline',
				// revision,
				matcher({ request }: HandlerDidErrorCallbackParam) {
					return request.destination === 'document'
				},
			},
		],
	},
})

serwist.addEventListeners()
