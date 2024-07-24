import { TitleStyled } from '@page/app-playground/loading/Title.styled'
import { Grid, SkeletonCard, Spacer } from '@repo/ui'

export default function Loading() {
	return (
		<Spacer vertical={4}>
			<TitleStyled>Loading...</TitleStyled>
			<Grid cols={1} gap={6} lg={{ cols: 3 }}>
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
				<SkeletonCard isLoading />
			</Grid>
		</Spacer>
	)
}
