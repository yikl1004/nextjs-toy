'use client'

import { useQuery } from '@tanstack/react-query'
import { productQueryKeyFn } from '.'
import { getProduct as queryFn } from './getProduct'
import type { ProductParams, ProductQueryKey, ProductResponse } from './types'

// props type
interface UseProductQueryProps extends ProductParams {}

/**
 * @description hook(include useQuery)
 * @warn Do not use it in a `server component`.
 */
export const useProductQuery = (props?: UseProductQueryProps) => {
	const queryKey = productQueryKeyFn(props || null)
	return useQuery<ProductResponse, Error, ProductResponse, ProductQueryKey>({
		queryKey,
		queryFn,
	})
}
