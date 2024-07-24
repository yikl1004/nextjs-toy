'use client'

import { useState } from 'react'
import { Button } from '@repo/ui'

export function BuggyButton() {
	const [clicked, setClicked] = useState(false)

	if (clicked) {
		throw new Error('Oh no! Something went wrong.')
	}

	return (
		<Button
			kind="error"
			onClick={() => {
				setClicked(true)
			}}
		>
			Trigger Error
		</Button>
	)
}
