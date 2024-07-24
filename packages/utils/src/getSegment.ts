export const getSegment = (headers: Headers) => {
	const fullUrl = headers.get('x-url') || ''
	const pathname = new URL(fullUrl).pathname

	// pathname을 분석하여 현재 세그먼트 추출
	const segments = pathname.split('/').filter(Boolean)
	const currentSegment = segments[segments.length - 1] || null

	return currentSegment
}
