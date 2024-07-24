import { NextResponse } from 'next/server'
import { menuList } from '@page/api/mock/menu/data'

export async function GET() {
	return NextResponse.json({
		resultCode: '00',
		resultMessage: '성공적으로 처리하였습니다.',
		data: menuList,
	})
}
