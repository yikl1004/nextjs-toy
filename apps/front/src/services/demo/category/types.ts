import type { QueryFunction } from '@tanstack/react-query'

export type CategoryQueryFunction = QueryFunction<CategoryResponse, CategoryQueryKey>

// response type
export interface CategoryResponse {
	name: string
	slug: string
	count: number
	parent: string | null
}

// parameter type
export interface CategoryParams {
	slug?: string
	delay?: number
}

// query key type
export type CategoryQueryKey = readonly ['@menu/category', CategoryParams | null]
