import { request } from '@services/api'
import type { ProductsQueryFunction, ProductsResponse } from './types'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/mock/products': ProductsResponse
	}
}

export const getProducts: ProductsQueryFunction = async ({ queryKey }) => {
	const [, parentQueryKey] = queryKey

	const data = await request.get('/mock/products', {
		params: parentQueryKey,
	})

	return data
}
