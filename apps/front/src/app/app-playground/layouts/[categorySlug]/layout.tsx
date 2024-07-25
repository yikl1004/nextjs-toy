import { categoriesPrefetchQuery } from '@services/demo/categories'
import { Alignment, Box, ClickCounter, Spacer, TabGroup } from '@repo/ui'
import { HydrationBoundary } from '@tanstack/react-query'
import { categoryPrefetchQuery } from '@services/demo/category'
import { SegmentDetect } from 'src/components/SegmentDetect'

type LayoutProps = React.PropsWithChildren<{
	params: { categorySlug: string }
}>

export default async function Layout({ children, params }: LayoutProps) {
	const { data: categories, dehydratedState } = await categoriesPrefetchQuery({
		parent: params.categorySlug,
	})
	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	const items = [{ text: 'All' }].concat(
		(categories || []).map((x) => ({
			text: x.name,
			slug: x.slug,
		})),
	)

	return (
		<HydrationBoundary state={dehydratedState}>
			<Spacer vertical={9}>
				<Alignment flex justifyContent="space-between">
					<SegmentDetect
						component={TabGroup}
						category={category}
						path="/app-playground/layouts"
						items={items}
					/>
					<Box alignSelf="flex-start" className="self-start">
						<ClickCounter />
					</Box>
				</Alignment>
				<Box>{children}</Box>
			</Spacer>
		</HydrationBoundary>
	)
}