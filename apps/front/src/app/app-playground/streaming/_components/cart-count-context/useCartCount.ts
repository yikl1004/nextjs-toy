import { CartCountContext } from '@page/app-playground/streaming/_components/cart-count-context'
import { isUndefined } from '@repo/utils'
import { useContext } from 'react'

export function useCartCount() {
	const context = useContext(CartCountContext)
	if (isUndefined(context)) {
		throw new Error('useCartCount must be used within a CartCountProvider')
	}
	return context
}
