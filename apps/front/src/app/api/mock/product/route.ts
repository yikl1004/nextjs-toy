import { NextRequest, NextResponse } from 'next/server'
import { fakeFetchForProduct } from '@mocks/resolvers/products'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
	const url = request.nextUrl.clone()
	const { searchParams } = url

	if (!searchParams.get('id')) {
		return NextResponse.json('error')
	}

	const data = await fakeFetchForProduct(url.toString())

	return NextResponse.json(data)
}
