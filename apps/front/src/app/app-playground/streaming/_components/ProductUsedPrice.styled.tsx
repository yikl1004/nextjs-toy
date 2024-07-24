'use client'

import styled from '@emotion/styled'

export const ProductUsedPriceStyled = styled('div')`
	font-size: 0.875rem;
	line-height: 1.25rem;

	.title {
		color: ${({ theme }) => theme.color.gray400};
	}

	.unit {
		color: ${({ theme }) => theme.color.gray200};
	}
`
