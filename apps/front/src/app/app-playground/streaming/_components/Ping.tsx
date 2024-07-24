'use client'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Box } from '@repo/ui'

const ping = keyframes`
	75%,
	100% {
		transform: scale(2);
		opacity: 0;
	}
`

const PingStyled = styled('span')`
	display: flex;
	height: 11px;
	width: 11px;

	& > span {
		background-color: ${({ theme }) => theme.color.vercel_pink};
		border-radius: 9999px;
	}

	span:nth-child(1) {
		position: absolute;
		display: inline-flex;
		height: 100%;
		width: 100%;
		opacity: 0.75;
		animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
	}

	span:nth-child(2) {
		position: relative;
		display: inline-flex;
		height: 11px;
		width: 11px;
	}
`

export function Ping() {
	return (
		<PingStyled>
			<Box as="span" />
			<Box as="span" />
		</PingStyled>
	)
}
