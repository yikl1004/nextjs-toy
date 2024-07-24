import { notFound } from 'next/navigation'
import { SkeletonCard, Spacer, Grid } from '@repo/ui'
import { TitleStyled } from '@page/app-playground/loading/Title.styled'
import { categoryPrefetchQuery } from '@services/demo/category'

interface PageProps {
	params: { categorySlug: string }
}

export default async function Page({ params }: PageProps) {
	const { data: category } = await categoryPrefetchQuery({
		delay: 2000,
		slug: params.categorySlug,
	})

	if (!category) {
		notFound()
	}

	return (
		<Spacer vertical={4} className="space-y-4">
			<TitleStyled>{category.name}</TitleStyled>
			<Grid cols={1} gap={6} lg={{ cols: 3 }}>
				{Array.from({ length: category.count })
					.map((_, i) => ({ id: i }))
					.map((item) => (
						<SkeletonCard key={item.id} />
					))}
			</Grid>
		</Spacer>
	)
}
