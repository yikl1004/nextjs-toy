import { dinero, type DineroSnapshot } from 'dinero.js'
import { Suspense } from 'react'
import { Ping } from '@page/app-playground/streaming/_components/Ping'
import { ProductPrice } from '@page/app-playground/streaming/_components/Pricing/ProductPrice'
import { AddToCart } from '@page/app-playground/streaming/_components/AddToCart'
import { LoadingDots } from '@page/app-playground/streaming/_components/Pricing/LoadingDots'
import { UserSpecificDetails } from '@page/app-playground/streaming/_components/Pricing/UserSpecificDetails'
import { PricingStyled } from '@page/app-playground/streaming/_components/Pricing/Pricing.styled'
import { Box } from '@repo/ui'
import type { ProductResponse } from '@services/demo/product/types'

export function Pricing({ product, cartCount }: { product: ProductResponse; cartCount: string }) {
	const price = dinero(product.price as DineroSnapshot<number>)

	return (
		<PricingStyled vertical={4}>
			<ProductPrice price={price} discount={product.discount} />
			<Box display="block" position="relative">
				<Box display="block" position="absolute" left={-4} top={1}>
					<Ping />
				</Box>
			</Box>
			<Suspense fallback={<LoadingDots />}>
				<UserSpecificDetails productId={product.id} />
			</Suspense>
			<AddToCart initialCartCount={Number(cartCount)} />
		</PricingStyled>
	)
}
