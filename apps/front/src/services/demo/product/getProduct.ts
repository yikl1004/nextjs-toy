import { request } from '@services/api'
import type { ProductQueryFunction, ProductResponse } from './types'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/mock/product': ProductResponse
	}
}

export const getProduct: ProductQueryFunction = async ({ queryKey }) => {
	const [, parentQueryKey] = queryKey

	const data = await request.get('/mock/product', {
		params: parentQueryKey,
	})

	return data
}
