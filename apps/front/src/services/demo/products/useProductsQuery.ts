'use client'

import { useQuery } from '@tanstack/react-query'
import { productsQueryKeyFn } from '.'
import { getProducts as queryFn } from './getProducts'
import type { ProductsParams, ProductsQueryKey, ProductsResponse } from './types'

/**
 * @description hook(include useQuery)
 * @warn Do not use it in a `server component`.
 */
export const useProductQuery = (props?: ProductsParams) => {
	const queryKey = productsQueryKeyFn(props || null)
	return useQuery<ProductsResponse, Error, ProductsResponse, ProductsQueryKey>({
		queryKey,
		queryFn,
	})
}
