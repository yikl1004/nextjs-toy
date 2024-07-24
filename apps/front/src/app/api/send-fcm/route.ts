import type { NextRequest } from 'next/server'
import { type ServiceAccount } from 'firebase-admin'
import admin from 'firebase-admin'
// import serviceAccountKeys from "@/utils/firebase/firebase-admin-keys.json"

import { type App, getApp } from 'firebase-admin/app'
import { logger } from '@repo/utils'

// Firebase Admin SDK 초기화
const serviceAccount: ServiceAccount = {
	// firebase api 키
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	// 서비스 계정 비공개 키
	privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
	clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
}

const initApp = () => {
	let app: App
	try {
		app = getApp('app')
	} catch (e) {
		app = admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
		})
	}

	return app
}

interface NotificationData {
	data: {
		title: string
		body: string
		image: string
		clickAction: string
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sendFCMNotification = async (data: NotificationData) => {
	initApp()

	/**
	 * @description
	 * 토큰 불러오기
	 * 앞서 푸시 권한과 함께 발급받아 저장해둔 토큰들을 모조리 불러온다.
	 * 관리하기 편하고 안전한 방법으로 저장하고 불러오면된다.
	 * 예제에서는 firestore에 저장하고 불러오는 방식을 구현해보려고 한다.
	 *
	 * 1. client에서 notification요청 후 권한을 획득했다면 promise로 전달되는 token을 서버에 저장하는 로직을 먼저 만들어야 한다.
	 * 2. setver에서 저장된 token 리스트를 불러와 `admin.messaging().sendMulticast(notiData)`를 통해 동시에 여러개의 토큰으로 푸시를 전송할 수 있다.
	 *
	 * @example
	 * ```ts
	 * const tokenList: string[] = []
	 *
	 * const res = await admin.messaging().sendMulticast(notificationData)
	 *
	 * // 발송결과를 전달
	 * retuen res
	 * ```
	 */
}

export async function POST(request: NextRequest) {
	// validation 처리가 필요
	const data: NotificationData = await request.json()

	logger.info('## REQUEST BODY ##', request.cookies)
	logger.info('## FORM DATA ##', data)

	await sendFCMNotification(data)

	return Response.json(data)
}
