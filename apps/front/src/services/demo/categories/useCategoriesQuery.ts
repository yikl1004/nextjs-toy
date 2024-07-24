'use client'

/**
 * @description
 * 이 파일은 예시를 위한 파일입니다.
 */

import { useQuery } from '@tanstack/react-query'
import { categoriesQueryKeyFn } from '.'
import { getCategories } from './getCategories'
import type { CategoriesQueryKey, CategoriesResponse } from './types'

export const useCategoriesQuery = ({ parent, delay }: { parent?: string; delay?: number }) => {
	const queryKey = categoriesQueryKeyFn({ parent, delay })
	return useQuery<CategoriesResponse, Error, CategoriesResponse, CategoriesQueryKey>({
		queryKey,
		queryFn: getCategories,
		// enabled: !!props?.parent,
		placeholderData: [],
	})
}
