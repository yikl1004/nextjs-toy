'use client'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { margin } from '@repo/utils/emotion'
import { Box } from '@component/Box.styled'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const CicularLoading = styled('div')`
	.load {
		width: 100px;
		height: 100px;
		${margin({ top: 27.5, x: 'auto', bottom: 0 })}
		border: solid 10px #8822aa;
		border-radius: 50%;
		border-right-color: transparent;
		border-bottom-color: transparent;

		transition: all 0.5s ease-in;
		animation-name: ${rotate};
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
`

export function PageLoading() {
	return (
		<CicularLoading>
			<Box className="load" />
		</CicularLoading>
	)
}
