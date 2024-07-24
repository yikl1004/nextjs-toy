'use client'

import { useEffect, useState } from 'react'
import { getFirebaseToken } from '.'
import { useNotificationPermission } from './useNotificationPermission'

/**
 * @description {@link getFirebaseToken}함수를 이용해 FCM Token을 state에 저장 후 반환,
 * permission 상태에 따라 {@link getFirebaseToken}함수를 요청하기 때문에 불규칙적으로 여러번 요청 될 수 있습니다.
 */
export const useFCMToken = () => {
	const { permission } = useNotificationPermission()
	const [fcmToken, setFcmToken] = useState<string | null>(null)

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getFirebaseToken().then((token) => {
			if (token) {
				setFcmToken(token)
			}
		})
	}, [permission])

	return fcmToken
}
