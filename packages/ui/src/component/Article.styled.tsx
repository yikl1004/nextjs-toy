'use client'

import styled from '@emotion/styled'

export const ArticleTitleStyled = styled('h1')`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	text-transform: capitalize;
	color: ${({ theme }) => theme.color.gray200};
`

export const ArticleContentStyled = styled('div')`
	order: -1;
	grid-column: 1 / -1;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		order: 0;
		grid-column: span 2 / span 2;
	}
`
export const ArticleBodyStyled = styled('p')`
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	font-weight: 500;
	color: ${({ theme }) => theme.color.gray500};
`
