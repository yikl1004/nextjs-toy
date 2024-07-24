'use client'

import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { padding } from '@repo/utils/emotion'
import { condition, ms } from '@repo/utils'
import { Box } from '@component/Box.styled'
import { useInterval } from '@repo/hooks'

const RenderedTimeAgoStyled = styled('div')`
	height: 1.5rem;
	width: 5rem;
	align-items: center;
	border-radius: 9999px;
	background-color: ${({ theme }) => theme.color.gray100};
	${padding.x(2)}
	text-align: center;
	font-size: 0.875rem;
	line-height: 1.25rem;
	line-height: 1.5rem;

	.time {
		font-weight: 600;
		color: ${({ theme }) => theme.color.gray900};
	}

	.ago {
		color: ${({ theme }) => theme.color.gray600};
	}
`

interface RenderedTimeAgoProps {
	timestamp: number
}

export function RenderedTimeAgo({ timestamp }: RenderedTimeAgoProps) {
	const [msAgo, setMsAgo] = useState<number>(0)

	// update on page change
	useEffect(() => {
		setMsAgo(Date.now() - timestamp)
	}, [timestamp])

	// update every second
	useInterval(() => {
		setMsAgo(Date.now() - timestamp)
	}, 1000)

	return (
		// https://react.dev/reference/react-dom/hydrate#suppressing-unavoidable-hydration-mismatch-errors
		<RenderedTimeAgoStyled title={new Date(timestamp).toISOString()} suppressHydrationWarning>
			{msAgo ? (
				<>
					<Box as="span" className="time">
						{condition(msAgo >= 1000, ms(msAgo), '0s')}
					</Box>{' '}
					<Box as="span" className="ago">
						ago
					</Box>
				</>
			) : null}
		</RenderedTimeAgoStyled>
	)
}
