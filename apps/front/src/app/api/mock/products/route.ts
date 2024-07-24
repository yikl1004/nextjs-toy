import { NextResponse } from 'next/server'
import { fakeFetchForProducts } from '@mocks/resolvers/products'

export const dynamic = 'force-dynamic'

export async function GET() {
	const data = await fakeFetchForProducts()

	return NextResponse.json(data)
}
