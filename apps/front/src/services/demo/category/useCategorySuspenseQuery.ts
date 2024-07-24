'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { categoryQueryKeyFn } from '.'
import { getCategory } from './getCategory'
import type { CategoryQueryKey, CategoryResponse } from './types'

/**
 * @description hook for suspense(include useSuspenseQuery)
 * @warn Do not use it in a `server component`.
 */
export const useCategorySuspenseQuery = (props?: { slug?: string }) => {
	const queryKey = categoryQueryKeyFn(props ? { slug: props.slug } : null)
	const { data, ...rest } = useSuspenseQuery<
		CategoryResponse,
		Error,
		CategoryResponse,
		CategoryQueryKey
	>({
		queryKey,
		queryFn: getCategory,
	})

	return {
		data,
		...rest,
	}
}
