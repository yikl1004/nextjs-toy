import { QueryFunction } from '@tanstack/react-query'

export type ProductsQueryFunction = QueryFunction<ProductsResponse, ProductsQueryKey>

interface Currency {
	code: string
	base: number
	exponent: number
}

interface Price {
	amount: number
	scale: number
	currency: Currency
}

interface Discount {
	percent: number
	expires: number
}

interface UsedPrice {
	amount: number
	currency: Currency
	scale: number
}

interface Products {
	id: `${number}`
	stock: number
	rating: number
	name: string
	description: string
	price: Price
	isBestSeller: boolean
	leadTime: number
	discount?: Discount
	image: string
	imageBlur: string
	usedPrice?: UsedPrice
}

export type ProductsResponse = Products[]

export type ProductsParams = {
	filter?: string
	delay?: number
}

export type ProductsQueryKey = readonly ['@demo/products', ProductsParams | null]
