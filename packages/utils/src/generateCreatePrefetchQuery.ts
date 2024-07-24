import { dehydrate } from '@tanstack/react-query'
import type { DehydratedState, QueryClient, QueryFunction, QueryKey } from '@tanstack/react-query'

// 쿼리 함수의 반환 유형을 추론하는 도우미 타입
type QueryData<T> = T extends QueryFunction<infer R> ? R : never

interface PrefetchQueryResult<F> {
	data: F | undefined
	dehydratedState: DehydratedState
}

export const generateCreatePrefetchQuery = (getQueryClient: () => QueryClient) => {
	return async <K extends QueryKey, F>(
		queryKey: K,
		queryFn: QueryFunction<F, K>,
		initialData?: F,
	): Promise<PrefetchQueryResult<F>> => {
		const queryClient = getQueryClient()

		await queryClient.prefetchQuery({
			queryKey,
			queryFn,
			staleTime: 3000,
			initialData,
		})

		const data = queryClient.getQueryData<QueryData<QueryFunction<F, K>>>(queryKey)

		const dehydratedState = dehydrate(queryClient)

		if (!data) {
			await queryClient.invalidateQueries({ queryKey })
		}

		return { data, dehydratedState }
	}
}
