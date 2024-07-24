import { createPrefetchQuery } from '@services/createPrefetchQuery'
import { getPosts } from './getPosts'
import type { PostsParams } from './types'

export const postsQueryKeyFn = (paramsKey?: PostsParams) => ['@demo/posts', paramsKey] as const

export const postsPrefetchQuery = (params: PostsParams) =>
	createPrefetchQuery(postsQueryKeyFn(params), getPosts)
