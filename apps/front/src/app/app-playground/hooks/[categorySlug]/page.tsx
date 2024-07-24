import { notFound } from 'next/navigation'
import { CategoryName, Spacer } from '@repo/ui'
import { HooksClient } from '@page/app-playground/hooks/_components/router-context'
import { categoryPrefetchQuery } from '@services/demo/category'

interface PageProps {
	params: { categorySlug: string }
}

export default async function Page({ params }: PageProps) {
	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Spacer vertical={9}>
			<CategoryName name={category.name}>All</CategoryName>
			<HooksClient />
		</Spacer>
	)
}
