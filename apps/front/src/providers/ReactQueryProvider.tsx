'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					throwOnError: true,
				},
			},
		}),
	)

	return (
		<QueryClientProvider client={client}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
