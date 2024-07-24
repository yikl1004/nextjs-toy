import { NextRequest, NextResponse } from 'next/server'

// 미들웨어 단계에서 핸들링이 필요하면 사용
export async function middleware(request: NextRequest) {
	// `NODE_ENV`가 `development` 인 경우에만 접근 가능
	// if (isProduction() && url.pathname.includes('/app-playground')) {
	// 	url.pathname = '/'
	// 	return NextResponse.redirect(url)
	// }

	const requestHeaders = new Headers(request.headers)
	requestHeaders.set('x-url', request.url)
	requestHeaders.set('x-pathname', request.nextUrl.pathname)

	const response = NextResponse.next({
		headers: requestHeaders,
	})

	return response
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}
