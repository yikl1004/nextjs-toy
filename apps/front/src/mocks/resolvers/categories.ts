// eslint-disable-next-line import/no-extraneous-dependencies
import { HttpResponse, delay, http } from 'msw'
import dummy from '@mocks/data/categories'
import { isNull } from '@repo/utils'

export const fakeFetchForCategories = async (url: string) => {
	const { searchParams } = new URL(url)
	let data = null
	const delayParam = searchParams.get('delay')
	const slugParam = searchParams.get('slug')
	const parentParam = searchParams.get('parent')

	if (delayParam) {
		await delay(Number(delayParam))
	}

	if (!slugParam && !parentParam) {
		data = dummy.filter((item) => isNull(item.parent))
	}

	if (slugParam) {
		data = dummy.find((item) => Object.is(item.slug, slugParam))
	}

	if (parentParam) {
		data = dummy.filter((item) => Object.is(item.parent, parentParam))
	}

	return data
}

export function categories() {
	return http.get('/mock/categories', async ({ request }) => {
		const data = await fakeFetchForCategories(request.url)

		return HttpResponse.json(data || dummy)
	})
}

export const fakeFetchForCategory = async (url: string) => {
	const { searchParams } = new URL(url)
	let data = null

	if (searchParams.get('delay')) {
		await delay(Number(searchParams.get('delay')))
	}

	if (!searchParams.get('slug') && !searchParams.get('parent')) {
		data = dummy.filter((item) => isNull(item.parent))
	}

	if (searchParams.get('slug')) {
		data = dummy.find((item) => Object.is(item.slug, searchParams.get('slug')))
	}

	if (searchParams.get('parent')) {
		data = dummy.filter((item) => Object.is(item.parent, searchParams.get('parent')))
	}

	return data
}

export function category() {
	return http.get('/mock/category', async ({ request }) => {
		const data = fakeFetchForCategory(request.url)

		return HttpResponse.json(data || categories)
	})
}
