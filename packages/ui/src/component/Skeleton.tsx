'use client'

import { Grid } from '@component/Grid.styled'
import { SkeletonCard } from '@component/SkeletonCard'

interface SkeletonProps {
	count: number
}

export function Skeleton({ count }: SkeletonProps) {
	return (
		<Grid cols={1} gap={6} lg={{ cols: 3 }}>
			{Array.from({ length: count })
				.map((_, index) => ({ id: index }))
				.map((item) => (
					<SkeletonCard key={item.id} />
				))}
		</Grid>
	)
}
