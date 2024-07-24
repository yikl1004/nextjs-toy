import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { NavigationEvent } from '@components/common/NavigationEvent'
import { Providers } from '@providers/index'
import { DevHelper } from '@components/dev/DevHelper'

/**
 * @name generateMetadata
 * @param {PageProps} pageProps
 * @param {import('next').ResolvingMetadata} parent
 */
export async function generateMetadata(): Promise<Metadata> {
	const defaultValues = {
		APP_NAME: 'PWA App',
		APP_DEFAULT_TITLE: 'My Awesome PWA App',
		APP_TITLE_TEMPLATE: '%s - PWA App',
		APP_DESCRIPTION: 'Best PWA app in the world!',
	}

	return {
		// metadataBase: '/',
		applicationName: defaultValues.APP_NAME,
		title: {
			default: defaultValues.APP_DEFAULT_TITLE,
			template: defaultValues.APP_TITLE_TEMPLATE,
		},
		description: defaultValues.APP_DESCRIPTION,
		manifest: '/manifest.json',
		appleWebApp: {
			capable: true,
			statusBarStyle: 'default',
			title: defaultValues.APP_DEFAULT_TITLE,
			// startUpImage: [],
		},
		formatDetection: {
			telephone: false,
		},
		openGraph: {
			type: 'website',
			siteName: defaultValues.APP_NAME,
			title: {
				default: defaultValues.APP_DEFAULT_TITLE,
				template: defaultValues.APP_TITLE_TEMPLATE,
			},
			description: defaultValues.APP_DESCRIPTION,
		},
		twitter: {
			card: 'summary',
			title: {
				default: defaultValues.APP_DEFAULT_TITLE,
				template: defaultValues.APP_TITLE_TEMPLATE,
			},
			description: defaultValues.APP_DESCRIPTION,
		},
	}
}

export const viewport: Viewport = {
	themeColor: '#FFFFFF',
}

type RootRayoutProps = React.PropsWithChildren

export default function RootLayout({ children }: RootRayoutProps) {
	// const isLogin = !!cookies().get(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)?.value

	return (
		<html lang="ko">
			<head />
			<body>
				<Providers>
					<DevHelper />
					{children}
				</Providers>
				<Suspense fallback={null}>
					<NavigationEvent />
				</Suspense>
			</body>
		</html>
	)
}
