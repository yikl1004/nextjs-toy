import { notFound } from 'next/navigation'
import { CategoryName, SkeletonCard, Spacer, Grid } from '@repo/ui'
import { categoryPrefetchQuery } from '@services/demo/category'

interface PageProps {
	params: {
		categorySlug: string
	}
}

export default async function Page({ params }: PageProps) {
	// - `getCategory()` returns `notFound()` if the fetched data is `null` or `undefined`.
	// - `notFound()` renders the closest `not-found.tsx` in the route segment hierarchy.
	// - For `layout.js`, the closest `not-found.tsx` starts from the parent segment.
	// - For `page.js`, the closest `not-found.tsx` starts from the same segment.
	// - Learn more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy.

	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Spacer vertical={4}>
			<CategoryName name={category.name}>All</CategoryName>
			<Grid cols={1} gap={6} lg={{ cols: 3 }}>
				{Array.from({ length: 9 })
					.map((_, i) => ({ id: i }))
					.map((item) => (
						<SkeletonCard key={item.id} />
					))}
			</Grid>
		</Spacer>
	)
}
