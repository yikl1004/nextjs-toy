import { NextRequest, NextResponse } from 'next/server'
import { fakeFetchForCategory } from '@mocks/resolvers/categories'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
	const url = request.nextUrl.clone()
	const data = await fakeFetchForCategory(url.toString())

	return NextResponse.json(data)
}
