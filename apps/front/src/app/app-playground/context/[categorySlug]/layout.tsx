import { Suspense } from 'react'
import { Boundary, TabGroup, Spacer, Box } from '@repo/ui'
import { Counter } from '@page/app-playground/context/Counter'
import { categoriesPrefetchQuery } from '@services/demo/categories'
import { categoryPrefetchQuery } from '@services/demo/category'
import { HydrationBoundary } from '@tanstack/react-query'
import { SegmentDetect } from 'src/components/SegmentDetect'

type LayoutProps = React.PropsWithChildren<{
	params: { categorySlug: string }
}>

export default async function Layout({ children, params }: LayoutProps) {
	const { data: categories, dehydratedState: dehydratedStateCategories } =
		await categoriesPrefetchQuery({ parent: params.categorySlug })
	const { data: category, dehydratedState: dehydratedStateCategory } =
		await categoryPrefetchQuery({ slug: params.categorySlug })

	const items = [
		{ text: 'All', segment: null },
		...(categories ?? []).map((x) => ({
			text: x.name,
			slug: x.slug,
			segment: x.segment,
		})),
	]

	return (
		<HydrationBoundary state={{ ...dehydratedStateCategories, ...dehydratedStateCategory }}>
			<Boundary labels={['Layout [Server Component]']} animateRerendering={false}>
				<Spacer vertical={9}>
					<Suspense fallback={<Box>...loading</Box>}>
						<SegmentDetect
							component={TabGroup}
							path="/app-playground/context"
							category={category}
							items={items}
						/>
					</Suspense>
					<Counter />
					<Box>{children}</Box>
				</Spacer>
			</Boundary>
		</HydrationBoundary>
	)
}
