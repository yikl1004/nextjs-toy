'use client'

import styled from '@emotion/styled'
import { Alignment } from '@repo/ui'

export const ProductPriceStyled = styled(Alignment)`
	& > .currency {
		font-size: 0.875rem;
		line-height: 1.25rem;
		line-height: 1.375;
		color: ${({ theme }) => theme.color.white};
	}

	& > .price {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
		line-height: 1.375;
		color: ${({ theme }) => theme.color.white};
	}
`
