'use client'

import styled from '@emotion/styled'
// import { loading } from '@ui/style/keyframes'
import { margin } from '@repo/utils/emotion'

export const LoadingDotsStyled = styled('div')`
	font-size: 0.875rem;
	line-height: 1.25rem;

	.inner {
		& > :not([hidden]) ~ :not([hidden]) {
			${margin({ right: 0, left: 0.5 })}
		}
	}

	[class^='dot-'] {
		display: inline-flex;
		border-radius: 9999px;
	}

	.dot-1 {
		animation: ${({ theme }) => theme.keyframes.loading} 1.4s ease-in-out infinite;
	}

	.dot-2 {
		animation: ${({ theme }) => theme.keyframes.loading} 1.4s ease-in-out 0.2s infinite;
	}

	.dot-3 {
		animation: ${({ theme }) => theme.keyframes.loading} 1.4s ease-in-out 0.4s infinite;
	}
`
