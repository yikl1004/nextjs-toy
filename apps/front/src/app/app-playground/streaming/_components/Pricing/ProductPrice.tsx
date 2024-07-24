import { multiply, toUnits, type Dinero } from 'dinero.js'
import { ProductDeal } from '@page/app-playground/streaming/_components/Pricing/ProductDeal'
import { ProductLighteningDeal } from '@page/app-playground/streaming/_components/Pricing/ProductLighteningDeal'
import { ProductPriceStyled } from '@page/app-playground/streaming/_components/Pricing/ProductPrice.styled'
import { Box } from '@repo/ui'
import { ProductResponse } from '@services/demo/product/types'
import { isNumber } from '@repo/utils'

function isDiscount(obj: ProductResponse['discount']) {
	return isNumber(obj?.percent)
}

function formatDiscount(price: Dinero<number>, discountRaw: ProductResponse['discount']) {
	if (discountRaw && isDiscount(discountRaw)) {
		return {
			amount: multiply(price, {
				amount: discountRaw.percent,
				scale: 2,
			}),
			expires: discountRaw.expires,
		}
	}

	return undefined
}

export function ProductPrice({
	price,
	discount: discountRaw,
}: {
	price: Dinero<number>
	discount: ProductResponse['discount']
}) {
	const discount = formatDiscount(price, discountRaw)

	if (discount) {
		if (isNumber(discount.expires)) {
			return <ProductLighteningDeal price={price} discount={discount} />
		}
		return <ProductDeal price={price} discount={discount} />
	}

	return (
		<ProductPriceStyled flex>
			<Box className="currency">
				{price.toJSON().amount.toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
			</Box>
			<Box className="price">{toUnits(price)}</Box>
		</ProductPriceStyled>
	)
}
