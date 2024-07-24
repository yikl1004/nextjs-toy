'use client'

import { Boundary, Box, CounterStyled } from '@repo/ui'
import { useCounter } from '@page/app-playground/context/_context/useCounter'

export function Counter() {
	const [count] = useCounter()

	return (
		<Boundary
			labels={['Counter Context [Client Component]']}
			color="blue"
			size="small"
			animateRerendering={false}
		>
			<CounterStyled>
				<Box as="span">{count}</Box> Clicks
			</CounterStyled>
		</Boundary>
	)
}
