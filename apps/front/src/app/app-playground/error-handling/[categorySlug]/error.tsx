'use client'

import { ErrorPage } from '@page/app-playground/error-handling/_components/ErrorPage'

interface ErrorProps {
	error?: { message: string }
	reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
	return (
		<ErrorPage
			labels={['./[categorySlug]/error.tsx']}
			reset={reset}
			title="Error"
			error={error}
		/>
	)
}
