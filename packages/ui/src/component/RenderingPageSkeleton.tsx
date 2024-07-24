import { Box } from '@component/Box.styled'
import { RenderingPageSkeletonStyled } from '@component/RenderingPageSkeleton.styled'
import { Spacer } from '@component/Spacer.styled'

export const RenderingPageSkeleton = () => {
	return (
		<RenderingPageSkeletonStyled cols={6} gap={{ x: 6, y: 3 }}>
			<Spacer vertical={3} colSpan={{ count: 'full' }} lg={{ colSpan: 4 }}>
				<Box className="title" />
				<Box className="paragraph" />
			</Spacer>
			<Box className="section">
				<Box className="inner">
					<Box className="item-1" />
					<Box className="item-2" />
				</Box>
			</Box>
		</RenderingPageSkeletonStyled>
	)
}
