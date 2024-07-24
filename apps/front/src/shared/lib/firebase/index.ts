'use client'

import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, isSupported } from 'firebase/messaging'
import type { FirebaseOptions } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export * from './useFCM'
export * from './useFCMToken'
export * from './useNotificationPermission'

const firebaseConfig: FirebaseOptions = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	/**
	 * @description
	 * Firebase 프로젝트에서 Analytics를 활성화하고 웹 앱을 등록하면 자동으로 생성되는 ID입니다.
	 * 버전 7.20.0 이상에서는 이 매개변수가 선택사항입니다.
	 */
	// measurementId
}

export const firebaseApp = initializeApp(firebaseConfig)

// DEV: 테스트 후 삭제 예정
export const db = getFirestore(firebaseApp)

export const messaging = (async () => {
	try {
		const isSupportedBrowser = await isSupported()

		if (isSupportedBrowser) {
			return getMessaging(firebaseApp)
		}

		// eslint-disable-next-line no-console
		console.info('Firebase is not supported in this browser')

		return null
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error)

		return null
	}
})()

export const getOrRegisterServiceWorker = () => {
	if ('serviceWorker' in navigator && typeof window.navigator.serviceWorker !== 'undefined') {
		return window.navigator.serviceWorker
			.getRegistration('/firebase-push-notification-scope')
			.then((serviceWorker) => {
				if (serviceWorker) return serviceWorker
				return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
					scope: '/firebase-push-notification-scope',
				})
			})
	}
	throw new Error('The browser doesn`t support service worker.')
}

export const getFirebaseToken = async () => {
	try {
		const messagingResolve = await messaging
		let registerServiceWorker
		if (messagingResolve) {
			registerServiceWorker = await getOrRegisterServiceWorker().then(
				(serviceWorkerRegistration) => {
					return Promise.resolve(
						getToken(messagingResolve, {
							vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
							serviceWorkerRegistration,
						}),
					)
				},
			)
		}
		return registerServiceWorker
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('An error occurred while retrieving token. ', error)

		return undefined
	}
}
