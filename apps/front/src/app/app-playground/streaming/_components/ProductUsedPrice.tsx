import { dinero, toUnits, type DineroSnapshot } from 'dinero.js'
import { ProductUsedPriceStyled } from '@page/app-playground/streaming/_components/ProductUsedPrice.styled'
import { Box } from '@repo/ui'
import type { ProductResponse } from '@services/demo/product/types'

type ProductUsedPriceProps = Pick<ProductResponse, 'usedPrice'>

export function ProductUsedPrice({ usedPrice: usedPriceRaw }: ProductUsedPriceProps) {
	const usedPrice = dinero(usedPriceRaw as DineroSnapshot<number>)

	return (
		<ProductUsedPriceStyled>
			<Box className="title">More buying choices</Box>
			<Box className="unit">
				{toUnits(usedPrice, ({ currency, value }) => {
					return Math.round(parseFloat(value.join('.'))).toLocaleString('en-US', {
						style: 'currency',
						currency: currency.code,
					})
				})}{' '}
				(used)
			</Box>
		</ProductUsedPriceStyled>
	)
}
