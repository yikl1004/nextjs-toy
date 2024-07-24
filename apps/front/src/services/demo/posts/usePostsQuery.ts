'use client'

/**
 * @description
 * 이 파일은 예시를 위한 파일입니다.
 */

import { useQuery } from '@tanstack/react-query'
import { postsQueryKeyFn } from '.'
import { getPosts } from './getPosts'
import { PostsQueryKey, PostsResponse } from './types'

export const usePostsQuery = ({ id }: { id: string }) => {
	const queryKey = postsQueryKeyFn({ id })

	return useQuery<PostsResponse, Error, PostsResponse, PostsQueryKey>({
		queryKey,
		queryFn: getPosts,
		// enabled: !!props?.parent,
	})
}
