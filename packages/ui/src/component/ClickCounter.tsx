'use client'

import { useState } from 'react'
import styled from '@emotion/styled'
import { padding } from '@repo/utils/emotion'

const ClickCounterStyled = styled('button')`
	white-space: nowrap;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray700};
	${padding({ y: 1, x: 3 })}
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: ${({ theme }) => theme.color.gray100};

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			background-color: ${({ theme }) => theme.color.gray500};
			color: ${({ theme }) => theme.color.white};
		}
	}
`

export function ClickCounter() {
	const [count, setCount] = useState(0)

	return (
		<ClickCounterStyled type="button" onClick={() => setCount(count + 1)}>
			{count} Clicks
		</ClickCounterStyled>
	)
}
