import { useSuspenseQuery } from '@tanstack/react-query'
import { productsQueryKeyFn } from '.'
import type { ProductsParams, ProductsQueryKey, ProductsResponse } from './types'
import { getProducts as queryFn } from './getProducts'

export const useProductsSuspenseQuery = (props?: ProductsParams) => {
	const queryKey = productsQueryKeyFn(props || null)
	const { data, ...rest } = useSuspenseQuery<
		ProductsResponse,
		Error,
		ProductsResponse,
		ProductsQueryKey
	>({ queryKey, queryFn })

	return { data, ...rest }
}
