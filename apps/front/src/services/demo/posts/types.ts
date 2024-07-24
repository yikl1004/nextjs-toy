import type { QueryFunction } from '@tanstack/react-query'

export interface Posts {
	userId: number
	id: number
	title: string
	body: string
}

export type PostsResponse = Posts

export interface PostsParams {
	id: string
}

export type PostsQueryKey = readonly ['@demo/posts', PostsParams | undefined]

export type PostsQueryFunction = QueryFunction<PostsResponse, PostsQueryKey>
