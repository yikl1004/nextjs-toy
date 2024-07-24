import type { Metadata } from 'next'
import { AddressBar, GlobalNavigation } from '@repo/ui'
import { GlobalStyles } from '@repo/ui/GlobalStyles'
import { Content } from '@page/app-playground/Content.styled'
import { Container } from '@page/app-playground/Container.styled'
import { Suspense } from 'react'
import { menuPrefetchQuery } from '@services/mock/menu'
import { HydrationBoundary } from '@tanstack/react-query'
import { headers } from 'next/headers'
import { SegmentDetect } from 'src/components/SegmentDetect'

export const metadata: Metadata = {
	title: {
		default: 'Next.js App Router',
		template: '%s | Next.js App router',
	},
	description:
		'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
	openGraph: {
		title: 'Next.js App Router Playground',
		description:
			'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
		images: ['/api/og?title=Next.js App Router'],
	},
	twitter: {
		card: 'summary_large_image',
	},
}

type RootRayoutProps = React.PropsWithChildren<{
	params?: {
		[key: string]: string
	}
}>

export default async function Layout({ children, params }: RootRayoutProps) {
	const { data, dehydratedState } = await menuPrefetchQuery()
	const headerList = headers()
	const pathname = headerList.get('x-pathname') || ''
	const searchParams = new URL(headerList.get('x-url') || '').searchParams

	console.log(pathname, searchParams)

	return (
		<HydrationBoundary state={dehydratedState}>
			<GlobalStyles />
			<SegmentDetect component={GlobalNavigation} menus={data?.data || []} />
			<Container>
				<Suspense>
					<AddressBar pathname={pathname} searchParams={searchParams} />
				</Suspense>
				<Content>{children}</Content>
			</Container>
		</HydrationBoundary>
	)
}
