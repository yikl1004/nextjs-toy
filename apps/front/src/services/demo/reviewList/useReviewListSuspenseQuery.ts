import { useSuspenseQuery } from '@tanstack/react-query'
import { reviewListQueryKeyFn as queryKey } from '.'
import { getReviewList as queryFn } from './getReviewList'

export const useReviewListSuspenseQuery = () => {
	const { data, ...rest } = useSuspenseQuery({ queryKey: queryKey({ delay: 100 }), queryFn })

	return { data, ...rest }
}
