import type { Review } from '@services/demo/reviewList/type'
import { Alignment, Box, Spacer } from '@repo/ui'
import { ProductRating } from '@page/app-playground/streaming/_components/ProductRating'
import { ProductReviewCardStyled } from '@page/app-playground/streaming/_components/ProductReviewCard.styled'

interface ProductReviewCardProps {
	review: Review
}

export function ProductReviewCard({ review }: ProductReviewCardProps) {
	return (
		<ProductReviewCardStyled vertical={4}>
			<Spacer vertical={2}>
				<Alignment flex alignItems="center" className="user">
					<Box className="avatar" />
					<Box className="name">{review.name}</Box>
				</Alignment>
				{review.rating ? <ProductRating rating={review.rating} /> : null}
			</Spacer>
			<Box className="text">{review.text}</Box>
		</ProductReviewCardStyled>
	)
}
