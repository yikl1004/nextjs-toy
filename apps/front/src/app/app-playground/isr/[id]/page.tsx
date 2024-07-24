import { notFound } from 'next/navigation'
import { DescriptionStyled, InfoStyled, TitleStyled } from '@page/app-playground/isr/[id]/styled'
import { postsPrefetchQuery } from '@services/demo/posts'
import { Grid, RenderingInfo, Spacer } from '@repo/ui'

export const dynamicParams = true

export async function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function Page({ params }: { params: { id: string } }) {
	const { data } = await postsPrefetchQuery({ id: params.id })

	if (!data) {
		notFound()
	}

	return (
		<Grid cols={6} gap={{ x: 6, y: 3 }}>
			<Spacer vertical={3} colSpan={{ count: 'full', lg: 4 }}>
				<TitleStyled>{data.title}</TitleStyled>
				<DescriptionStyled>{data.body}</DescriptionStyled>
			</Spacer>
			<InfoStyled>
				<RenderingInfo type="isr" />
			</InfoStyled>
		</Grid>
	)
}
