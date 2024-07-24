import { request } from '@services/api'
import type { CategoryQueryFunction, CategoryResponse } from './types'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/mock/category': CategoryResponse
	}
}

// fetch function
export const getCategory: CategoryQueryFunction = async ({ queryKey }) => {
	const [, slugQueryKey] = queryKey
	const params = JSON.parse(JSON.stringify(slugQueryKey))

	const data = await request.get('/mock/category', {
		params,
	})

	return data
}
