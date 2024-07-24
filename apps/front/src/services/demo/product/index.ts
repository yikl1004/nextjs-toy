import { createPrefetchQuery } from '@services/createPrefetchQuery'
import { getProduct } from './getProduct'
import type { ProductParams } from './types'

export const productQueryKeyFn = (paramsKey: ProductParams | null) =>
	['@demo/product', paramsKey] as const

export const productPrefetchQuery = async (params: ProductParams) => {
	const { data, dehydratedState } = await createPrefetchQuery(
		productQueryKeyFn(params),
		getProduct,
	)
	return { data, dehydratedState }
}
