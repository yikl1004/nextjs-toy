'use client'

import styled from '@emotion/styled'
import { Box } from '@repo/ui'
import { padding } from '@repo/utils/emotion'

const ContainerStyled = styled('div')`
	display: flex;

	.expires {
		/*  */
		border-radius: 0.25rem;
		background-color: ${({ theme }) => theme.color.gray600};
		${padding.x(1.5)}
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		line-height: 1.25rem;
		color: ${({ theme }) => theme.color.white};
	}
`

type ProductLighteningDealStyledProps = React.PropsWithChildren

export const ProductLighteningDealStyled = ({ children }: ProductLighteningDealStyledProps) => {
	return (
		<ContainerStyled>
			<Box className="expires">{children}</Box>
		</ContainerStyled>
	)
}
