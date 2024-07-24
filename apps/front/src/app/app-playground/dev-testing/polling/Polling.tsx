'use client'

import { useQuery } from '@tanstack/react-query'
import { request } from '@services/api'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/api/polling': {
			userAgent: string
			date: string
		}
	}
}

export const Polling = () => {
	/**
	 * @description
	 * 개발예시를 위한 더미 코드 입니다.
	 */
	const { data } = useQuery({
		queryKey: ['@polling'],
		queryFn: async () => {
			const result = await request.get('/api/polling')

			return result
		},
		// polling 주기
		refetchInterval: 3000,
		// background refetch 허용 여부
		refetchIntervalInBackground: true,
	})

	return (
		<div>
			<p>{data?.date}</p>
			<p>{data?.userAgent}</p>
		</div>
	)
}
