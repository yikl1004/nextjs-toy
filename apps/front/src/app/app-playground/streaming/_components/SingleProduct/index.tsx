import { cookies } from 'next/headers'
import { Spacer, Grid } from '@repo/ui'
import { Pricing } from '@page/app-playground/streaming/_components/Pricing'
import { ProductRating } from '@page/app-playground/streaming/_components/ProductRating'
import { ProductThumbnails } from '@page/app-playground/streaming/_components/SingleProduct/ProductThumbnails'
import { ProductName } from '@page/app-playground/streaming/_components/SingleProduct/ProductName'
import { ProductDescription } from '@page/app-playground/streaming/_components/SingleProduct/ProductDescription'
import { PricingBoxStyled } from '@page/app-playground/streaming/_components/SingleProduct/PricingBox.styled'
import type { ProductResponse } from '@services/demo/product/types'

export const SingleProduct = async ({ data }: { data: ProductResponse }) => {
	// Get the cart count from the users cookies and pass it to the client
	// AddToCart component
	const cartCount = cookies().get('_cart_count')?.value || '0'

	const images = [
		{ src: `/demo/${data.image}` || '', alt: `${data.name}-1` },
		{ src: `/demo/${data.image}` || '', alt: `${data.name}-2` },
		{ src: `/demo/${data.image}` || '', alt: `${data.name}-3` },
	] as [{ src: string; alt: string }, { src: string; alt: string }, { src: string; alt: string }]

	return (
		<Grid cols={4} gap={6}>
			<ProductThumbnails images={images} />
			<Spacer vertical={4} colSpan={{ count: 'full' }} lg={{ colSpan: 2 }}>
				<ProductName name={data.name} />
				<ProductRating rating={data.rating} />
				<ProductDescription>
					<p>{data.description}</p>
					<p>{data.description}</p>
				</ProductDescription>
			</Spacer>
			<PricingBoxStyled>
				<Pricing product={data} cartCount={cartCount} />
			</PricingBoxStyled>
		</Grid>
	)
}
