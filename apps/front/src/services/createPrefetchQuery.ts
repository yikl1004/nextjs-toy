import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'
import { generateCreatePrefetchQuery } from '@repo/utils'

const queryClient = cache(
	() =>
		new QueryClient({
			defaultOptions: {
				queries: {
					throwOnError: true,
				},
			},
		}),
)

export const createPrefetchQuery = generateCreatePrefetchQuery(queryClient)
