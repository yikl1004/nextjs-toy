import { allocate, toUnits, type Dinero } from 'dinero.js'
import { ProductSplitPaymentsStyled } from '@page/app-playground/streaming/_components/Pricing/PricingSplitPayments.styled'

export function ProductSplitPayments({ price }: { price: Dinero<number> }) {
	// only offer split payments for more expensive items
	if (toUnits(price)[0] < 150) {
		return null
	}

	const [perMonth] = allocate(price, [1, 2])

	return (
		<ProductSplitPaymentsStyled>
			Or{' '}
			{price.toJSON().amount.toLocaleString('en-US', {
				style: 'currency',
				currency: price.toJSON().currency.code,
			})}
			{/* {toUnits(perMonth, { digits: 0, round: up })} */}
			{toUnits(perMonth)[0]}
			/month for 3 months
		</ProductSplitPaymentsStyled>
	)
}
