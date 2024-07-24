import { request } from '@services/api'
import type { ReviewListQueryFunction, ReviewResponse } from './type'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/mock/reviews': ReviewResponse
	}
}

export const getReviewList: ReviewListQueryFunction = async () => {
	const data = await request.get('/mock/reviews')

	return data
}
