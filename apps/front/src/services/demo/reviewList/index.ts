import { createPrefetchQuery } from '@services/createPrefetchQuery'
import { getReviewList } from './getReviewList'
import type { ReviewParams } from './type'

export const reviewListQueryKeyFn = (params: ReviewParams) => ['@review/list', params] as const

export const reviewsPrefetchQuery = (params: ReviewParams) =>
	createPrefetchQuery(reviewListQueryKeyFn(params), getReviewList)
