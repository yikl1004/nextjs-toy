import { HttpResponse, http } from 'msw'
import dummy from '@mocks/data/products'

type ProductFilterItem = 'price' | 'usedPrice' | 'leadTime' | 'stock'
type ProductFilter =
	| `${ProductFilterItem}`
	| `${ProductFilterItem}${ProductFilterItem}`
	| `${ProductFilterItem}${ProductFilterItem}${ProductFilterItem}`
	| `${ProductFilterItem}${ProductFilterItem}${ProductFilterItem}${ProductFilterItem}`

export const fakeFetchForProducts = async () => {
	const data = dummy

	return data
}

export function products() {
	return http.get<{ id: string; filter: ProductFilter; delay: `${number}` }>(
		'/mock/products',
		async (/** { request } */) => {
			const data = await fakeFetchForProducts()
			return HttpResponse.json(data)
		},
	)
}

export const fakeFetchForProduct = async (url: string) => {
	const { searchParams } = new URL(url)
	const idParams = searchParams.get('id')
	const data = dummy.find(({ id }) => Object.is(id, idParams))

	return data
}

export function product() {
	return http.get<{ id: string; filter: ProductFilter; delay: `${number}` }>(
		'/mock/product',
		async ({ request }) => {
			const data = await fakeFetchForProduct(request.url)

			return HttpResponse.json(data)
		},
	)
}
