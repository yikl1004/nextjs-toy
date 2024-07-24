'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { productQueryKeyFn } from '.'
import type { ProductParams, ProductQueryKey, ProductResponse } from './types'
import { getProduct as queryFn } from './getProduct'

export const useProductSuspenseQuery = (props?: ProductParams) => {
	const queryKey = productQueryKeyFn(props || null)
	const { data, ...rest } = useSuspenseQuery<
		ProductResponse,
		Error,
		ProductResponse,
		ProductQueryKey
	>({ queryKey, queryFn })

	return { data, ...rest }
}
