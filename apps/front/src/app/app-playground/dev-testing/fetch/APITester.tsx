'use client'

import { Suspense, useState } from 'react'
import { Loading } from '@page/app-playground/dev-testing/fetch/Loading'

export const APITester = ({ children, path }: React.StrictPropsWithChildren<{ path: string }>) => {
	const [call, setCall] = useState(false)

	return (
		<div className="desc">
			<span className="api-path">{path}</span>
			{call ? (
				<Suspense fallback={<Loading />}>{children}</Suspense>
			) : (
				<button type="button" onClick={() => setCall(true)}>
					Call
				</button>
			)}
		</div>
	)
}
