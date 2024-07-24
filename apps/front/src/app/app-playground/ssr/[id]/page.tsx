import { notFound } from 'next/navigation'
import {
	ArticleBodyStyled,
	ArticleContentStyled,
	ArticleTitleStyled,
	Grid,
	RenderingInfo,
	Spacer,
} from '@repo/ui'
import { postsPrefetchQuery } from '@services/demo/posts'

export default async function Page({ params }: { params: { id: string } }) {
	const { data } = await postsPrefetchQuery({ id: params.id })

	if (!data) {
		notFound()
	}

	return (
		<Grid cols={6} gap={{ x: 6, y: 3 }}>
			<Spacer vertical={3} colSpan={{ count: 'full' }} lg={{ colSpan: 4 }}>
				<ArticleTitleStyled>{data.title}</ArticleTitleStyled>
				<ArticleBodyStyled>{data.body}</ArticleBodyStyled>
			</Spacer>
			<ArticleContentStyled>
				<RenderingInfo type="ssr" />
			</ArticleContentStyled>
		</Grid>
	)
}
