import { notFound } from 'next/navigation'
import { Button, CategoryName, Spacer, Skeleton } from '@repo/ui'
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

	if (!category) {
		notFound()
	}

	return (
		<HydrationBoundary state={dehydratedState}>
			<Spacer vertical={4}>
				<CategoryName name={category.name} />
				<Button kind="buggy">Trigger Error</Button>
				<Skeleton count={category.count} />
			</Spacer>
		</HydrationBoundary>
	)
}
