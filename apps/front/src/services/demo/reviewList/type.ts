import { QueryFunction } from '@tanstack/react-query'

export type ReviewListQueryFunction = QueryFunction<ReviewResponse, ReviewListQueryKey>

export interface Review {
	id: string
	name: string
	rating: number
	text: string
}

export type ReviewResponse = Review[]

export interface ReviewParams {
	delay?: number
}

export type ReviewListQueryKey = readonly ['@review/list', ReviewParams]
