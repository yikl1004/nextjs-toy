'use client'

import { Boundary, Button } from '@repo/ui'
import { useCounter } from '@page/app-playground/context/_context/useCounter'

export function ContextClickCounter() {
	const [count, setCount] = useCounter()

	return (
		<Boundary
			labels={['Counter Context [Client Component]']}
			color="blue"
			size="small"
			animateRerendering={false}
		>
			<Button onClick={() => setCount(count + 1)}>{count} Clicks</Button>
		</Boundary>
	)
}
