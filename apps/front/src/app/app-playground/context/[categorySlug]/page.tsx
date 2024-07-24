import { notFound } from 'next/navigation'
import { Boundary, CategoryName, Spacer } from '@repo/ui'
import { Counter } from '@page/app-playground/context/Counter'
import { categoryPrefetchQuery } from '@services/demo/category'

export default async function Page({ params }: { params: { categorySlug: string } }) {
	const { data: category } = await categoryPrefetchQuery({ slug: params.categorySlug })

	if (!category) {
		notFound()
	}

	return (
		<Boundary labels={['Page [Server Component]']} animateRerendering={false}>
			<Spacer vertical={8}>
				<CategoryName name={category.name}>All</CategoryName>
				<Counter />
			</Spacer>
		</Boundary>
	)
}
