import { createPrefetchQuery } from '@services/createPrefetchQuery'
import { getProducts } from './getProducts'
import type { ProductsParams } from './types'

export const productsQueryKeyFn = (paramsKey: ProductsParams | null) =>
	['@demo/products', paramsKey] as const

export const productsPrefetchQuery = async (params: ProductsParams) => {
	const query = await createPrefetchQuery(productsQueryKeyFn(params), getProducts)
	return query
}
