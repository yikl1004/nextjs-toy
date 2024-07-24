import { request } from '@services/api'
import type { PostsQueryFunction, PostsResponse } from './types'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/mock/posts/:id': PostsResponse
	}
	interface AppPathVariables {
		'/mock/posts/:id': {
			id: string
		}
	}
}

export const getPosts: PostsQueryFunction = async ({ queryKey }) => {
	const [, parentQueryKey] = queryKey

	const data = await request.get('/mock/posts/:id', {
		pathVariables: parentQueryKey || undefined,
	})

	return data
}
