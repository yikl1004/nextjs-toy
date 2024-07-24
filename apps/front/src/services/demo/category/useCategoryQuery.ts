'use client'

import { useQuery } from '@tanstack/react-query'
import { categoryQueryKeyFn } from '.'
import { getCategory } from './getCategory'
import type { CategoryQueryKey, CategoryResponse } from './types'

// props type
interface UseCategoryQueryProps {
	slug?: string
}

/**
 * @description hook(include useQuery)
 * @warn Do not use it in a `server component`.
 */
export const useCategoryQuery = ({ slug }: UseCategoryQueryProps) => {
	const queryKey = categoryQueryKeyFn(slug ? { slug } : null)

	return useQuery<CategoryResponse, Error, CategoryResponse, CategoryQueryKey>({
		queryKey,
		queryFn: getCategory,
		enabled: !!slug,
	})
}
