import { ProductLowStockWarningStyled } from '@page/app-playground/streaming/_components/ProductLowStockWarning.styled'

export function ProductLowStockWarning({ stock }: { stock: number }) {
	if (stock > 3) {
		return null
	}

	return (
		<ProductLowStockWarningStyled>
			{Object.is(stock, 0) ? `Out of stock` : `Only ${stock} left in stock`}
		</ProductLowStockWarningStyled>
	)
}
