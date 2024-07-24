'use client'

import styled from '@emotion/styled'
import { Spacer } from '@repo/ui'

export const RecommendedProductsStyled = styled(Spacer)`
	.title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: ${({ theme }) => theme.color.white};
	}

	.subtitle {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: ${({ theme }) => theme.color.gray400};
	}
	.card {
		grid-column: span 4 / span 4;

		/* @media lg */
		${({ theme }) => theme.mediaQueries.over.lg} {
			grid-column: span 1 / span 1;
		}
	}
`
