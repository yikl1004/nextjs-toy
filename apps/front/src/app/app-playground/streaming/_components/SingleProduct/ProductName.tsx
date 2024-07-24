'use client'

import styled from '@emotion/styled'

const ProductNameStyled = styled('div')`
	// lg:text-2xl
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 500;
	color: ${({ theme }) => theme.color.white};

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		font-size: 1.5rem;
		line-height: 2rem;
	}
`

interface ProductNameProps {
	name: string
}

export const ProductName = ({ name }: ProductNameProps) => {
	return <ProductNameStyled>{name}</ProductNameStyled>
}
