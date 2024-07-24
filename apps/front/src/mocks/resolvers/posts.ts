import { HttpResponse, http } from 'msw'
import dummy from '@mocks/data/posts'

export const fakeFetchForPosts = async (params: {
	[K: string]: string | ReadonlyArray<string>
}) => {
	const data = dummy.find((item) => Object.is(`${item.id}`, params.id))
	return data
}

export function posts() {
	return http.get('/mock/posts/:id', async ({ params }) => {
		const data = fakeFetchForPosts(params)
		return HttpResponse.json(data)
	})
}
