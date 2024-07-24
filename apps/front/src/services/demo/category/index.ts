import { createPrefetchQuery } from '@services/createPrefetchQuery'
import { getCategory } from './getCategory'
import type { CategoryParams } from './types'

// query key generate function(include parameter)
export const categoryQueryKeyFn = (paramsKey: CategoryParams | null) =>
	['@menu/category', paramsKey] as const

export const categoryPrefetchQuery = (params: CategoryParams) =>
	createPrefetchQuery(categoryQueryKeyFn(params), getCategory)
