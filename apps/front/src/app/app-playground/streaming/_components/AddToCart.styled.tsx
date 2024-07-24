'use client'

import styled from '@emotion/styled'
import { margin, padding, position } from '@repo/utils/emotion'

export const AddToCartStyled = styled('button')`
	background-color: ${({ theme }) => theme.color.vercel_blue};
	position: relative;
	width: 100%;
	align-items: center;
	border-radius: 0.5rem;
	${padding({ y: 1, x: 3 })}
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: ${({ theme }) => theme.color.white};

	&:disabled {
		color: ${({ theme }) => theme.color.white_70};
	}

	& > :not([hidden]) ~ :not([hidden]) {
		${margin({ right: 0, left: 2 })}
	}

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			background-color: ${({ theme }) => theme.color.vercel_blue_90};
		}
	}

	.pending {
		${position.absolute({ right: 2, top: 1.5 })}

		&-icon {
			/*    */
			height: 1rem;
			width: 1rem;
			border-radius: 9999px;
			border-width: 3px;
			border-color: ${({ theme }) => theme.color.white};
			border-right-color: transparent;
			animation: ${({ theme }) => theme.keyframes.spin} 1s linear infinite;
		}
	}
`
