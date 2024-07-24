import { NextRequest, NextResponse } from 'next/server'
import { fakeFetchForCategories } from '@mocks/resolvers/categories'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
	const url = request.nextUrl.clone()
	const data = await fakeFetchForCategories(url.toString())

	return NextResponse.json(data)
}
