import { request } from '@services/api'
import type { CategoriesQueryFn, CategoriesResponse } from './types'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/mock/categories': CategoriesResponse
	}
}

export const getCategories: CategoriesQueryFn = async ({ queryKey }) => {
	const [, parentQueryKey] = queryKey
	const params = JSON.parse(JSON.stringify(parentQueryKey))

	const data = await request.get('/mock/categories', {
		params,
	})

	return data || []
}
