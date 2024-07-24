'use client'

import styled from '@emotion/styled'
import { Theme, css } from '@emotion/react'
import { position, margin, padding, flex } from '@repo/utils/emotion'

export const GlobalNavigationStyled = styled.div`
	${position.fixed({ top: 0 })};
	z-index: 10;
	width: 100%;
	${flex({ direction: 'column' })}
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.color.gray800};
	background-color: ${({ theme }) => theme.color.black};

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		bottom: 0px;
		z-index: auto;
		width: 18rem;
		height: 100%;
		border-bottom-width: 0px;
		border-right-width: 1px;
		border-color: ${({ theme }) => theme.color.gray800};
	}

	.simplebar-scrollbar:before {
		background-color: rgba(255, 255, 255, 0.6);
	}
`

export const AppLogoStyled = styled('div')`
	${flex({ align: 'center' })}
	height: 3.5rem;
	${padding(4)}

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		height: auto;
	}

	& > .link {
		${flex({ align: 'center' })}
		width: 100%;
		-moz-column-gap: 0.625rem;
		column-gap: 0.625rem;

		&:hover > .title {
			color: ${({ theme }) => theme.color.gray50};
		}

		.title {
			font-weight: 600;
			letter-spacing: 0.025em;
			color: ${({ theme }) => theme.color.gray400};
		}
	}
`

export const HamburgerButton = styled('button')`
	/* group   */
	position: absolute;
	right: 0;
	top: 0;
	${flex({ align: 'center' })}
	height: 3.5rem;
	-moz-column-gap: 0.5rem;
	column-gap: 0.5rem;
	${padding.x(4)}

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		display: none;
	}

	&:hover .text {
		color: ${({ theme }) => theme.color.gray400};
	}

	.text {
		font-weight: 500;
		color: ${({ theme }) => theme.color.gray100};
	}

	& > svg {
		display: block;
		width: 1.5rem;
		color: ${({ theme }) => theme.color.gray400};
	}
`

export const openCss = (theme: Theme) => {
	return css`
		${position.fixed({ left: 0, right: 0, bottom: 0, top: 14 })}
		${margin.top('1px')}
        background-color: ${theme.color.black};
	`
}

export const NavContainerStyled = styled('div')<{ open?: boolean }>`
	overflow-y: auto;
	${({ open, theme }) => (open ? openCss(theme) : 'display: none;')}

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		position: static;
		display: block;
	}
`

export const Name = styled('div')`
	${margin.bottom(2)}
	${padding.x(3)}
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: ${({ theme }) => theme.color.gray400_80};
`

export const NavItemStyled = styled('a')`
	/* hover:text-gray-300 */
	display: block;
	border-radius: 0.375rem;
	${padding({ y: 2, x: 3 })}
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;

	&:hover {
		color: ${({ theme }) => theme.color.gray300};
	}

	&:not(.active) {
		color: ${({ theme }) => theme.color.gray400};
		&:hover {
			background-color: ${({ theme }) => theme.color.gray800};
		}
	}

	&.active {
		color: ${({ theme }) => theme.color.white};
	}
`
