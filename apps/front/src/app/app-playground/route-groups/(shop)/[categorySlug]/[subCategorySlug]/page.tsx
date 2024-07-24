// import { notFound } from 'next/navigation'
import { notFound } from 'next/navigation'
import { CategoryName, Skeleton, Spacer } from '@repo/ui'
import { categoryPrefetchQuery } from '@services/demo/category'
import { HydrationBoundary } from '@tanstack/react-query'

interface PageProps {
	params: {
		categorySlug: string
		subCategorySlug: string
	}
}

export default async function Page({ params }: PageProps) {
	const { data: category, dehydratedState } = await categoryPrefetchQuery({
		slug: params.categorySlug,
	})
	const { data: subCategory } = await categoryPrefetchQuery({
		slug: params.subCategorySlug,
	})

	if (!category || !subCategory) {
		notFound()
	}

	return (
		<HydrationBoundary state={dehydratedState}>
			<Spacer vertical={4}>
				<CategoryName name={category.name} />
				<Skeleton count={subCategory.count} />
			</Spacer>
		</HydrationBoundary>
	)
}
