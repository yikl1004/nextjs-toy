'use client'

import styled from '@emotion/styled'
import { padding } from '@repo/utils/emotion'

const ProductBestSellerStyled = styled('div')`
	border-radius: 0.25rem;
	background-color: ${({ theme }) => theme.color.gray600};
	${padding.x(1.5)}
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.color.white};
`

export function ProductBestSeller() {
	return <ProductBestSellerStyled>Best Seller</ProductBestSellerStyled>
}
