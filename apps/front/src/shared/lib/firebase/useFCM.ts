'use client'

import { onMessage, type MessagePayload } from 'firebase/messaging'
import { useEffect, useState } from 'react'
import { messaging } from '.'
import { useFCMToken } from './useFCMToken'

/**
 * @description FCM 정보를 react hook 또는 component 내에서 사용할 때 이 hook을 사용
 * - `message`: serviceWorker를 통해 전달 받은 푸시 메세지 Array
 * - `fcmToken`: FCM Token
 */
export const useFCM = () => {
	const fcmToken = useFCMToken()
	const [messages, setMessages] = useState<MessagePayload[]>([])

	useEffect(() => {
		let unsubscribe = () => {}
		messaging
			.then((fcmMessaging) => {
				if (fcmMessaging) {
					unsubscribe = onMessage(fcmMessaging, (payload) => {
						setMessages((prevMessages) => [...prevMessages, payload])
					})
				}
			})
			.catch(console.error)

		return () => unsubscribe()
	}, [fcmToken])

	return { fcmToken, messages }
}
