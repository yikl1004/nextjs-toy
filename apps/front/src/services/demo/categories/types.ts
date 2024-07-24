import type { QueryFunction } from '@tanstack/react-query'

export interface Category {
	name: string
	slug: string
	count: number
	parent: string | null
	segment?: string | null
}

export type CategoriesResponse = Category[] | null

export interface CategoriesParams {
	parent?: string
	delay?: number
	slug?: string
}

export type CategoriesQueryFn = QueryFunction<CategoriesResponse, CategoriesQueryKey>

export type CategoriesQueryKey = readonly ['@mock/categories', CategoriesParams | null]
