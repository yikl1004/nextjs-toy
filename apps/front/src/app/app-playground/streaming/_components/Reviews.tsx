import { notFound } from 'next/navigation'
import { Box, Spacer } from '@repo/ui'
import { ReviewStyled } from '@page/app-playground/streaming/_components/Review.styled'
import { reviewsPrefetchQuery } from '@services/demo/reviewList'
import { ProductReviewCard } from '@page/app-playground/streaming/_components/ProductReviewCard'

export async function Reviews() {
	// const reviews = (await data.then((res) => res.json())) as ReviewResponse[]
	const { data: reviews } = await reviewsPrefetchQuery({ delay: 1000 })

	if (!reviews) {
		notFound()
	}

	return (
		<ReviewStyled vertical={6}>
			<Box className="title">Customer Reviews</Box>
			<Spacer vertical={8}>
				{reviews.map((review) => (
					<ProductReviewCard key={review.id} review={review} />
				))}
			</Spacer>
		</ReviewStyled>
	)
}
