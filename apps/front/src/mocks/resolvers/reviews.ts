import { HttpResponse, delay, http } from 'msw'
import dummy from '@mocks/data/reviews'

export const fakeFetchForReviews = async (url: string) => {
	const { searchParams } = new URL(url)

	if (searchParams.get('delay')) {
		await delay(Number(searchParams.get('delay')))
	}

	const data = dummy

	return data
}

export function reviews() {
	return http.get('/mock/reviews', async ({ request }) => {
		const data = fakeFetchForReviews(request.url)

		return HttpResponse.json(data)
	})
}
