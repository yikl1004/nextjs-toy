'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useCartCount } from '@page/app-playground/streaming/_components/cart-count-context/useCartCount'
import { AddToCartStyled } from '@page/app-playground/streaming/_components/AddToCart.styled'
import { Box } from '@repo/ui'

export function AddToCart({ initialCartCount }: { initialCartCount: number }) {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const [, setOptimisticCartCount] = useCartCount()

	const addToCart = () => {
		setOptimisticCartCount(initialCartCount + 1)

		// update the cart count cookie
		document.cookie = `_cart_count=${initialCartCount + 1}; path=/; max-age=${
			60 * 60 * 24 * 30
		}};`

		// Normally you would also send a request to the server to add the item
		// to the current users cart
		// await fetch(`https://api.acme.com/...`);

		// Use a transition and isPending to create inline loading UI
		startTransition(() => {
			setOptimisticCartCount(null)

			// Refresh the current route and fetch new data from the server without
			// losing client-side browser or React state.
			router.refresh()

			// We're working on more fine-grained data mutation and revalidation:
			// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
		})
	}

	return (
		<AddToCartStyled type="button" onClick={addToCart} disabled={isPending}>
			Add to Cart
			{isPending ? (
				<Box className="pending" role="status">
					<Box className="pending-icon" />
					<Box as="span" className="sr-only">
						Loading...
					</Box>
				</Box>
			) : null}
		</AddToCartStyled>
	)
}
