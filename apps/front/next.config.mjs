import withSerwistInit from '@serwist/next'
import NextBundleAnalyzer from '@next/bundle-analyzer'

/**
 * @typedef {import('next').NextConfig} NextConfig
 */

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

/**
 * @template T, R
 * @param {((arg: T) => R)[]} fns
 * @returns {(arg: NextConfig) => NextConfig}
 *
 * @example
 * ```ts
 * type Func<T, R> = (arg: T) => R;
 *
 * function pipe<T, R>(fn1: Func<T, R>): Func<T, R>;
 * function pipe<T, R, S>(fn1: Func<T, R>, fn2: Func<R, S>): Func<T, S>;
 * // 필요한 만큼 오버로드를 추가할 수 있습니다.
 *
 * function pipe(...fns: Function[]) {
 *      return (arg: any) => fns.reduce((prev, fn) => fn(prev), arg);
 * }
 * ```
 */
const pipe =
	(...fns) =>
	(arg) =>
		// @ts-ignore
		fns.reduce((prev, fn) => fn(prev), arg)

const withPWA = withSerwistInit({
	swSrc: 'src/sw.ts',
	swDest: 'public/sw.js',
	reloadOnOnline: true,
	disable: false, // isDevelopment
})

const withBundleAnalyzer = NextBundleAnalyzer({
	enabled: false,
	openAnalyzer: false,
	analyzerMode: 'static',
})

const withPlugins = pipe(withPWA, withBundleAnalyzer)

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: isDevelopment,
	compiler: {
		emotion: true,
		removeConsole: isProduction,
	},
	experimental: {
		// forceSwcTransforms: true,
		scrollRestoration: true,

		/**
		 * @description 배럴 파일 skip하는 기능을 통해 빌드 배포 속도 개선
		 * @note tsconfig.json 참고
		 * - @app/utils : ./src/shared/utils/index.ts
		 * - @app/emotion-utils : ./src/shared/utils/emotion/index.ts
		 */
		// optimizePackageImports: ['@app/utils', '@app/emotion-utils'],
	},

	eslint: {
		// FIXME: 나중에 옵션 삭제
		ignoreDuringBuilds: true,
	},

	// CDN을 적극 활용함에 따라 거의 사용되지 않을 것으로 예상
	images: {
		remotePatterns: [],
	},

	// logging
	logging: {
		fetches: {
			fullUrl: isDevelopment,
		},
	},

	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		})

		const previousAliases = config.resolve.alias

		if (isServer) {
			// eslint-disable-next-line no-param-reassign
			config.resolve.alias = { ...previousAliases, 'msw/browser': false }
		} else {
			// eslint-disable-next-line no-param-reassign
			config.resolve.alias = { ...previousAliases, 'msw/node': false }
		}

		return config
	},

	/**
	 * @description
	 * api의 도메인이 달라 여기서 우회처리
	 * Server-side 에서는 이방식이 적용이 안되므로 fetch 모듈 이 api를 호출하기 직전
	 * uri를 수동으로 변경하는 코드가 필요함
	 *
	 * @example
	 * axios: interceptor 활용
	 * fetch: fetch를 바로 호출하지 말고 한번 랩핑한 후 랩핑한 함수 내부에서 uri를 재가공 처리한 후 fetch를 호출하는 방식
	 *
	 * 결과 적으론 axios나 fetch나 처리되는 로직은 동일하나 코드를 작성하는 구체적인 방법이 다를뿐 개념은 동일하다.
	 */
	async rewrites() {
		return [
			{
				source: '/restapi/:path*',
				destination: `${process.env.NEXT_PUBLIC_APP_API}/:path*`,
			},
		]
	},

	/**
	 * @description 내부(internal, nextjs api route) api만 적용 가능
	 */
	async headers() {
		// ACCESS_CONTROL_ALLOW_CREDENTIALS="true"
		// ACCESS_CONTROL_ALLOW_ORIGIN="*"
		// ACCESS_CONTROL_ALLOW_METHODS="GET,OPTIONS,PATCH,DELETE,POST,PUT"
		// ACCESS_CONTROL_ALLOW_HEADERS="X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
		return [
			// {
			// 	source: '/restapi/:path*',
			// 	headers: [
			// 		{ key: 'Access-Control-Allow-Credentials', value: 'true' },
			// 		{ key: 'Access-Control-Allow-Origin', value: '*' },
			// 		{ key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
			// 		{
			// 			key: 'Access-Control-Allow-Headers',
			// 			value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
			// 		},
			// 	],
			// },
		]
	},
}

export default withPlugins(nextConfig)
