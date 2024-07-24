import { LoadingDotsStyled } from '@page/app-playground/streaming/_components/Pricing/LoadingDots.styled'
import { Box } from '@repo/ui'

export const LoadingDots = () => {
	return (
		<LoadingDotsStyled>
			<Box as="span" className="inner">
				<Box as="span" className="dot-1">
					&bull;
				</Box>
				<Box as="span" className="dot-2">
					&bull;
				</Box>
				<Box as="span" className="dot-3">
					&bull;
				</Box>
			</Box>
		</LoadingDotsStyled>
	)
}
