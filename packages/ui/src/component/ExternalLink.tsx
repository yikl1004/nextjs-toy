'use client'

import styled from '@emotion/styled'
import { ArrowRightIcon } from '@icon/ArrowRightIcon'
import { Box } from '@component/Box.styled'
import { padding } from '@repo/utils/emotion'

const ExternalLinkStyled = styled('a')`
	text-decoration-line: none;
	color: ${({ theme }) => theme.color.gray100};
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 1.25rem;
	${padding({ y: 1, x: 3 })}
	background-color: ${({ theme }) => theme.color.gray700};
	border-radius: 0.5rem;
	-moz-column-gap: 0.5rem;
	column-gap: 0.5rem;
	display: inline-flex;

	& > svg {
		width: 1rem;
		display: block;
	}

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			color: ${({ theme }) => theme.color.white};
			background-color: ${({ theme }) => theme.color.gray500};
		}
	}
`

type ExternalLinkProps = React.PropsWithChildren<{
	href: string
}>

export function ExternalLink({ children, href }: ExternalLinkProps) {
	return (
		<ExternalLinkStyled href={href}>
			<Box>{children}</Box>
			<ArrowRightIcon className="block w-4" />
		</ExternalLinkStyled>
	)
}
