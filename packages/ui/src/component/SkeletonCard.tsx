'use client'

import styled from '@emotion/styled'
import { shimmerCss } from '@style/css'
import { padding } from '@repo/utils/emotion'
import { Box } from '@component/Box.styled'
import { Spacer } from '@component/Spacer.styled'

const SkeletonCardStyled = styled('div')`
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.color.gray900_80};
	${padding(4)}

	&.loading {
		${({ theme }) => shimmerCss(false, theme.keyframes.shimmer)}
	}

	.bg-gray-700 {
		background-color: ${({ theme }) => theme.color.gray700};
	}

	.rounded-lg {
		border-radius: 0.5rem;
	}

	.item-1 {
		height: 3.5rem;
	}

	.item-2 {
		height: 0.75rem;
		width: 91.666667%;
	}

	.item-3 {
		height: 0.75rem;
		width: 66.666667%;
	}
`

export function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
	return (
		<SkeletonCardStyled className={isLoading ? 'loading' : ''}>
			<Spacer vertical={3}>
				{[1, 2, 3].map((item) => (
					<Box key={item} className={`item-${item} bg-gray-700 rounded-lg`} />
				))}
			</Spacer>
		</SkeletonCardStyled>
	)
}
