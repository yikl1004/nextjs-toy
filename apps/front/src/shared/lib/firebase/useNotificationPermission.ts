'use client'

import { useEffect, useState } from 'react'

/**
 * @description `Notification`을 이용해 browser에게 notification permission을 요청합니다.
 * 반환받은 값은 state에 저장되고 다시 반환합니다.
 *
 * @note
 * TODO: 여기서 app, web 구분해서 처리하는 로직 필요할 수 있음(cookie로 divice 확인, cookie명 확인 필요)
 *
 * Notification 테스트
 * - iOS Simulator safari 테스트 불가(배포하여 테스트), 단순 테스트는 vercel 배포로 빠른 테스트 가능
 * - AOS Emulator Chrome에서 테스트 가능
 */
export const useNotificationPermission = () => {
	const [permission, setPermission] = useState<NotificationPermission>('default')

	useEffect(() => {
		if (window !== undefined && 'Notification' in window) {
			// const handler = () => setPermission(Notification.permission)
			// handler()

			const execute = async () => {
				const permission = await Notification.requestPermission()
				setPermission(permission)

				const notificationPerm = await navigator.permissions.query({
					name: 'notifications',
				})
				notificationPerm.addEventListener('change', () => {
					setPermission(permission)
				})
			}

			execute().catch((err) => {
				console.log('Notification Permission Error', err)
			})
		}
	}, [])

	return { permission }
}
