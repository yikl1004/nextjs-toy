import { notFound } from 'next/navigation'
import {
	RenderingInfo,
	Grid,
	Spacer,
	ArticleBodyStyled,
	ArticleContentStyled,
	ArticleTitleStyled,
} from '@repo/ui'
import { postsPrefetchQuery } from '@services/demo/posts'

export async function generateStaticParams() {
	// Generate two pages at build time and the rest (3-100) on-demand
	return [{ id: '1' }, { id: '2' }]
}

export default async function Page({ params }: { params: { id: string } }) {
	if (Number(params.id) >= 100) {
		notFound()
	}

	const { data } = await postsPrefetchQuery({ id: params.id })

	if (!data) {
		notFound()
	}

	const isOnDemand = Number(params.id) >= 3

	return (
		<Grid cols={6} gap={{ x: 6, y: 3 }}>
			<Spacer vertical={3} colSpan={{ count: 'full' }} lg={{ colSpan: 4 }}>
				<ArticleTitleStyled>{data.title}</ArticleTitleStyled>
				<ArticleBodyStyled>{data.body}</ArticleBodyStyled>
			</Spacer>
			<ArticleContentStyled>
				<RenderingInfo type={isOnDemand ? 'ssgod' : 'ssg'} />
			</ArticleContentStyled>
		</Grid>
	)
}
