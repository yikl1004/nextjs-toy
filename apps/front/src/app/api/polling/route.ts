import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	return NextResponse.json({
		userAgent: request.headers.get('User-Agent'),
		date: new Date(),
	})
}
