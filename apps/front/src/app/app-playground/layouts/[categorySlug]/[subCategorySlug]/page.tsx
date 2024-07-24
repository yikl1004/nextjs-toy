import { notFound } from 'next/navigation'
import { CategoryName, Skeleton, Spacer } from '@repo/ui'
import { categoryPrefetchQuery } from '@services/demo/category'
import { HydrationBoundary } from '@tanstack/react-query'

interface PageProps {
	params: { subCategorySlug: string }
}

export default async function Page({ params }: PageProps) {
	const { data: category, dehydratedState } = await categoryPrefetchQuery({
		slug: params.subCategorySlug,
	})

	if (!category) {
		notFound()
	}

	return (
		<HydrationBoundary state={dehydratedState}>
			<Spacer vertical={4}>
				<CategoryName name={category.name} />
				<Skeleton count={category.count} />
			</Spacer>
		</HydrationBoundary>
	)
}
