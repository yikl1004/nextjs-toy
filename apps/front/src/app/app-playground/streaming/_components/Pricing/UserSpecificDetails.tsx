import { dinero, type DineroSnapshot } from 'dinero.js'
import { notFound } from 'next/navigation'
import { ProductSplitPayments } from '@page/app-playground/streaming/_components/Pricing/ProductSplitPayments'
import { ProductUsedPrice } from '@page/app-playground/streaming/_components/ProductUsedPrice'
import { ProductEstimatedArrival } from '@page/app-playground/streaming/_components/ProductEstimateArrival'
import { ProductLowStockWarning } from '@page/app-playground/streaming/_components/ProductLowStockWarning'
import { productPrefetchQuery } from '@services/demo/product'

export async function UserSpecificDetails({ productId }: { productId: string }) {
	const { data } = await productPrefetchQuery({
		id: productId,
		delay: 500,
		filter: 'price,usedPrice,leadTime,stock',
	})

	if (!data) {
		notFound()
	}

	const price = dinero(data.price as DineroSnapshot<number>)

	return (
		<>
			<ProductSplitPayments price={price} />
			{data.usedPrice ? <ProductUsedPrice usedPrice={data.usedPrice} /> : null}
			<ProductEstimatedArrival leadTime={data.leadTime} hasDeliveryTime />
			{data.stock <= 1 ? <ProductLowStockWarning stock={data.stock} /> : null}
		</>
	)
}
