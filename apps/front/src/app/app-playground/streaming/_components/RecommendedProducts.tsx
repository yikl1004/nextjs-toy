import { ProductCard } from '@page/app-playground/streaming/_components/ProductCard'
import { Box, Grid } from '@repo/ui'
import { RecommendedProductsStyled } from '@page/app-playground/streaming/_components/RecommendedProducts.styled'
import { productsPrefetchQuery } from '@services/demo/products'

export async function RecommendedProducts({ path, filter }: { path: string; filter: string }) {
	const { data } = await productsPrefetchQuery({ delay: 500, filter })

	return (
		<RecommendedProductsStyled vertical={6}>
			<Box>
				<Box className="title">Recommended Products for You</Box>
				<Box className="subtitle">Based on your preferences and shopping habits</Box>
			</Box>
			<Grid cols={4} gap={6}>
				{(data || []).map((product) => (
					<Box key={product.id} className="card">
						<ProductCard product={product} href={`${path}/${product.id}`} />
					</Box>
				))}
			</Grid>
		</RecommendedProductsStyled>
	)
}
