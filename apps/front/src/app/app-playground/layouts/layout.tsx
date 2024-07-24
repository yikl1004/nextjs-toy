import { Suspense } from 'react'
import { ClickCounter, TabGroup, Spacer, Alignment, Box } from '@repo/ui'
import { categoriesPrefetchQuery } from '@services/demo/categories'
import { HydrationBoundary } from '@tanstack/react-query'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Nested Layouts'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	const { data: categories, dehydratedState } = await categoriesPrefetchQuery({})
	const items = [{ text: 'Home' }].concat(
		(categories || []).map((x) => ({
			text: x.name,
			slug: x.slug,
		})),
	)

	return (
		<HydrationBoundary state={dehydratedState}>
			<Spacer vertical={9}>
				<Alignment flex justifyContent="space-between">
					<Suspense>
						<SegmentDetect
							component={TabGroup}
							path="/app-playground/layouts"
							items={items}
						/>
					</Suspense>
					<Box alignSelf="flex-start">
						<ClickCounter />
					</Box>
				</Alignment>
				<Box>{children}</Box>
			</Spacer>
		</HydrationBoundary>
	)
}
