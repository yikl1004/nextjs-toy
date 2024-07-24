'use client'

import styled from '@emotion/styled'

export const InfoStyled = styled('div')`
	order: -1;
	grid-column: 1 / -1;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		order: 0;
		grid-column: span 2 / span 2;
	}
`

export const TitleStyled = styled('h1')`
	/* truncate text-2xl font-medium capitalize text-gray-200 */
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	color: ${({ theme }) => theme.color.gray200};
`

export const DescriptionStyled = styled('p')`
	font-weight: 500;
	color: ${({ theme }) => theme.color.gray500};
`
