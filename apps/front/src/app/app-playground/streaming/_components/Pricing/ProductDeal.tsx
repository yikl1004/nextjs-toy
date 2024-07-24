import { toUnits, type Dinero } from 'dinero.js'
import { ProductDealStyled } from '@page/app-playground/streaming/_components/Pricing/ProductDeal.styled'
import { Box } from '@repo/ui'

export function ProductDeal({
	price: priceRaw,
	discount: discountRaw,
}: {
	price: Dinero<number>
	discount: {
		amount: Dinero<number>
	}
}) {
	const discount = toUnits(discountRaw.amount)[0]
	const price = toUnits(priceRaw)[0]
	const percent = Math.round(100 - (discount / price) * 100)

	return (
		<ProductDealStyled>
			<Box className="percent">-{percent}%</Box>
			<Box className="symbol">
				<Box className="symbol-inner">
					{discountRaw.amount.toJSON().amount.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
					{/* <ProductCurrencySymbol dinero={discountRaw.amount} /> */}
				</Box>
				<Box className="discount">{discount}</Box>
			</Box>
			<Box className="symbol-with-price">
				{priceRaw.toJSON().amount.toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
				{/* <ProductCurrencySymbol dinero={priceRaw} /> */}
				{price}
			</Box>
		</ProductDealStyled>
	)
}
