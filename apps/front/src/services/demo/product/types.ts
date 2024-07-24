import { QueryFunction } from '@tanstack/react-query'
import { Currency } from 'dinero.js'

// type Currency = {
// 	code: string
// 	base: number
// 	exponent: number
// }

interface Price {
	amount: number
	scale: number
	currency: Currency<number>
}

interface Discount {
	percent: number
	expires: number
}

interface UsedPrice {
	amount: number
	currency: Currency<number>
	scale: number
}

interface Product {
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

export type ProductResponse = Product

export type ProductParams = {
	id: string
	filter?: string
	delay?: number
}

export type ProductQueryKey = readonly ['@demo/product', ProductParams | null]

export type ProductQueryFunction = QueryFunction<ProductResponse, ProductQueryKey>
