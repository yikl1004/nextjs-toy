import { dinero, type DineroSnapshot } from 'dinero.js'
import { Image } from '@components/common/Image'
import { ProductBestSeller } from '@page/app-playground/streaming/_components/ProductBestSeller'
import { ProductEstimatedArrival } from '@page/app-playground/streaming/_components/ProductEstimateArrival'
import { ProductLowStockWarning } from '@page/app-playground/streaming/_components/ProductLowStockWarning'
import { ProductPrice } from '@page/app-playground/streaming/_components/Pricing/ProductPrice'
import { ProductRating } from '@page/app-playground/streaming/_components/ProductRating'
import { ProductUsedPrice } from '@page/app-playground/streaming/_components/ProductUsedPrice'
import { ProductCardStyled } from '@page/app-playground/streaming/_components/ProductCard.styled'
import { Spacer, Box } from '@repo/ui'
import type { ProductResponse } from '@services/demo/product/types'

export function ProductCard({ product, href }: { product: ProductResponse; href: string }) {
	const price = dinero(product.price as DineroSnapshot<number>)

	return (
		<ProductCardStyled href={href}>
			<Spacer vertical={2}>
				<Box className="visual">
					{product.isBestSeller ? (
						<Box className="badge">
							<ProductBestSeller />
						</Box>
					) : null}
					<Image
						src={`/demo/${product.image}`}
						width={400}
						className="image"
						alt={product.name}
					/>
				</Box>

				<Box className="product-name">{product.name}</Box>

				{product.rating ? <ProductRating rating={product.rating} /> : null}

				<ProductPrice price={price} discount={product.discount} />

				{/* <ProductSplitPayments price={price} /> */}

				{product.usedPrice ? <ProductUsedPrice usedPrice={product.usedPrice} /> : null}

				<ProductEstimatedArrival leadTime={product.leadTime} />

				{product.stock <= 1 ? <ProductLowStockWarning stock={product.stock} /> : null}
			</Spacer>
		</ProductCardStyled>
	)
}
