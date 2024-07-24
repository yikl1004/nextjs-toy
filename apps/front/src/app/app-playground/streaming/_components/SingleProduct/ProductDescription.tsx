'use client'

import styled from '@emotion/styled'
import { Spacer } from '@repo/ui'

const ProductDescriptionStyled = styled(Spacer)`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.color.gray200};
`

type ProductDescriptionProps = React.PropsWithChildren

export const ProductDescription = ({ children }: ProductDescriptionProps) => {
	return <ProductDescriptionStyled vertical={4}>{children}</ProductDescriptionStyled>
}
