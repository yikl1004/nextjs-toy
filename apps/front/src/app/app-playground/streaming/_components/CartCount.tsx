'use client'

import { useCartCount } from '@page/app-playground/streaming/_components/cart-count-context/useCartCount'
import { Box } from '@repo/ui'

export function CartCount() {
	const [count] = useCartCount()
	return <Box as="span">{count}</Box>
}
