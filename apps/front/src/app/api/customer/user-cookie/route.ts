import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

/**
 * @description 사용자 체크 쿠키 삭제 - /api/customer/user-cookie
 * swagger의 '/v0/customer/user-cookie' api를 nextjs의 route handler로 대체
 * @note 로그아웃 할 때 같이 호출, 회원테이블에 INSERT 했음을 확인하는 목적
 * TODO: 아직 cookie name이 정해지지 않았음
 */
export const DELETE = () => {
	const response = NextResponse.json({
		resultCode: '00',
		resultMessage: 'SUCCESS',
		data: null,
	})

	cookies().delete('user_saved')

	return response
}

export const GET = () => {
	return NextResponse.next()
}
