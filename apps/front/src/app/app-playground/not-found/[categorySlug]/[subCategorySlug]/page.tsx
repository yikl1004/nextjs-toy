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
	// - `getCategory()` returns `notFound()` if the fetched data is `null` or `undefined`.
	// - `notFound()` renders the closest `not-found.tsx` in the route segment hierarchy.
	// - For `layout.js`, the closest `not-found.tsx` starts from the parent segment.
	// - For `page.js`, the closest `not-found.tsx` starts from the same segment.
	// - Learn more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy.

	const { data: category, dehydratedState } = await categoryPrefetchQuery({
		slug: params.categorySlug,
	})
	const { data: subCategory } = await categoryPrefetchQuery({ slug: params.subCategorySlug })

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
