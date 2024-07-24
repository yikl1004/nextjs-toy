import { notFound } from 'next/navigation'
import { CategoryName, Grid, SkeletonCard, Spacer } from '@repo/ui'
import { categoryPrefetchQuery } from '@services/demo/category'

export default async function Page({ params }: { params: { categorySlug: string } }) {
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
