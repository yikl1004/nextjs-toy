import { categoriesPrefetchQuery } from '@services/demo/categories'
import { Alignment, Box, ClickCounter, Spacer, TabGroup } from '@repo/ui'
import { categoryPrefetchQuery } from '@services/demo/category'
import { HydrationBoundary } from '@tanstack/react-query'
import { SegmentDetect } from 'src/components/SegmentDetect'

interface LayoutProps {
	children: React.ReactNode
	params: { categorySlug: string }
}

export default async function Layout({ children, params }: LayoutProps) {
	const { data: categories, dehydratedState: dehydratedStateCategories } =
		await categoriesPrefetchQuery({ parent: params.categorySlug })
	const { data: category, dehydratedState: dehydratedStateCategory } =
		await categoryPrefetchQuery({ slug: params.categorySlug })
	const items = [
		{ text: 'All' },
		...(categories || []).map((x) => ({
			text: x.name,
			slug: x.slug,
		})),
	]

	return (
		<HydrationBoundary state={{ ...dehydratedStateCategories, ...dehydratedStateCategory }}>
			<Spacer vertical={9}>
				<Alignment flex justifyContent="space-between">
					<SegmentDetect
						component={TabGroup}
						category={category}
						path="/app-playground/route-groups"
						items={items}
					/>
					<Box alignSelf="flex-start">
						<ClickCounter />
					</Box>
				</Alignment>
				<Box>{children}</Box>
			</Spacer>
		</HydrationBoundary>
	)
}
