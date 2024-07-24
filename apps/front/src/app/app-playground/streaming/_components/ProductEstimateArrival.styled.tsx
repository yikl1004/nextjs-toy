'use client'

import styled from '@emotion/styled'

export const ProductEstimateArrivalStyled = styled('div')`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.color.gray300};

	.date {
		font-weight: 700;
		color: ${({ theme }) => theme.color.gray100};
	}
`
