'use client'

import styled from '@emotion/styled'

export const ProductDealStyled = styled('div')`
	display: flex;
	column-gap: 0.375rem;

	.percent {
		color: ${({ theme }) => theme.color.vercel_cyan};
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
		line-height: 1.375;
	}

	.symbol {
		display: flex;

		&-inner {
			font-size: 0.875rem;
			line-height: 1.25rem;
			line-height: 1.375;
			color: ${({ theme }) => theme.color.white};
		}

		.discount {
			font-size: 1.125rem;
			line-height: 1.75rem;
			font-weight: 700;
			line-height: 1.375;
			color: ${({ theme }) => theme.color.white};
		}
	}

	.symbol-with-price {
		font-size: 0.875rem;
		line-height: 1.25rem;
		line-height: 1.375;
		color: ${({ theme }) => theme.color.gray400};
		text-decoration-line: line-through;
	}
`
