import { createPrefetchQuery } from '@services/createPrefetchQuery'
import { getCategories } from './getCategories'
import type { CategoriesParams } from './types'

export const categoriesQueryKeyFn = (paramsKey: CategoriesParams | null) =>
	['@mock/categories', paramsKey] as const

export const categoriesPrefetchQuery = (params: CategoriesParams) =>
	createPrefetchQuery(categoriesQueryKeyFn(params), getCategories)
