'use client'

import styled from '@emotion/styled'
import { Box, Grid, Spacer } from '@repo/ui'
import { padding } from '@repo/utils/emotion'
import { shimmerCss } from '@repo/ui/style'

const ProductSkeletonStyled = styled(Spacer)`
	grid-column: span 4 / span 4;

	.animate-item {
		position: relative;
		height: 167px;
		border-radius: 0.75rem;
		background-color: ${({ theme }) => theme.color.gray900};
		${({ theme }) => shimmerCss(true, theme.keyframes.shimmer)}
	}

	[class^='item'] {
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray900};
	}

	.item1 {
		height: 1rem;
		width: 100%;
	}

	.item2 {
		height: 1.5rem;
		width: 33.333333%;
	}

	.item3 {
		height: 1rem;
		width: 66.666667%;
	}
`

const ProductSkeleton = () => {
	return (
		<ProductSkeletonStyled vertical={4} colSpan={{ count: 4, lg: 1 }}>
			<Box className="animate-item" />
			<Box className="item1" />
			<Box className="item2" />
			<Box className="item1" />
			<Box className="item3" />
		</ProductSkeletonStyled>
	)
}

const RecommendedProductsSkeletonStyled = styled(Spacer)`
	${padding.bottom('5px')}

	.animate-item1 {
		height: 1.5rem;
		width: 33.333333%;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray900};
		${({ theme }) => shimmerCss(true, theme.keyframes.shimmer)}
	}

	.animate-item2 {
		height: 1rem;
		width: 50%;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray900};
		${({ theme }) => shimmerCss(true, theme.keyframes.shimmer)}
	}
`

export const RecommendedProductsSkeleton = () => {
	return (
		<RecommendedProductsSkeletonStyled vertical={6}>
			<Spacer vertical={2}>
				<Box className="animate-item1" />
				<Box className="animate-item2" />
			</Spacer>

			<Grid cols={4} gap={6}>
				<ProductSkeleton />
				<ProductSkeleton />
				<ProductSkeleton />
				<ProductSkeleton />
			</Grid>
		</RecommendedProductsSkeletonStyled>
	)
}

const ReviewSkeletonItemStyled = styled(Spacer)`
	[class^='item'] {
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray900};
	}

	.item1 {
		height: 1.5rem;
		width: 33.333333%;
	}
	.item2 {
		height: 1rem;
		width: 16.666667%;
	}
	.item3 {
		height: 1rem;
		width: 100%;
	}
	.item4 {
		height: 1rem;
		width: 66.666667%;
	}
`

const ReviewSkeletonItem = () => {
	return (
		<ReviewSkeletonItemStyled vertical={4}>
			<Box className="item" />
			<Box className="item" />
			<Box className="item" />
			<Box className="item" />
		</ReviewSkeletonItemStyled>
	)
}

const ReviewsSkeletonStyled = styled(Spacer)`
	.big {
		height: 1.75rem;
		width: 40%;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray900};
		${({ theme }) => shimmerCss(true, theme.keyframes.shimmer)}
	}
`

export const ReviewsSkeleton = () => {
	return (
		<ReviewsSkeletonStyled vertical={6}>
			<Box className="big" />
			<Spacer vertical={8}>
				<ReviewSkeletonItem />
				<ReviewSkeletonItem />
			</Spacer>
		</ReviewsSkeletonStyled>
	)
}
