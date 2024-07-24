'use client'

import styled from '@emotion/styled'

export const PricingBoxStyled = styled('div')`
	grid-column: 1 / -1;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		grid-column: span 1 / span 1;
	}
`
