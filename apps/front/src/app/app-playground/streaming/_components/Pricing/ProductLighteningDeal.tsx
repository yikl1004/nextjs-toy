import { add, formatDistanceToNow } from 'date-fns'
import { type Dinero } from 'dinero.js'
import { ProductDeal } from '@page/app-playground/streaming/_components/Pricing/ProductDeal'
import { ProductLighteningDealStyled } from '@page/app-playground/streaming/_components/Pricing/ProductLighteningDeal.styled'

export function ProductLighteningDeal({
	price,
	discount,
}: {
	price: Dinero<number>
	discount: {
		amount: Dinero<number>
		expires?: number
	}
}) {
	const date = add(new Date(), { days: discount.expires })

	return (
		<>
			<ProductLighteningDealStyled>
				Expires in {formatDistanceToNow(date)}
			</ProductLighteningDealStyled>

			<ProductDeal price={price} discount={discount} />
		</>
	)
}
