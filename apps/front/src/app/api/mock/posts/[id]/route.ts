import { NextRequest, NextResponse } from 'next/server'
import { fakeFetchForPosts } from '@mocks/resolvers/posts'

export const dynamic = 'force-dynamic'

interface Params {
	id: string
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
	// const url = request.nextUrl.clone()
	const data = await fakeFetchForPosts({ id: params?.id })

	return NextResponse.json(data)
}
