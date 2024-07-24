'use client'

import clsx from 'clsx'
import styled from '@emotion/styled'
import { StarIcon } from '@components/icon/StarIcon'
import { Alignment } from '@repo/ui'

const ProductRatingStyled = styled(Alignment)`
	svg {
		width: 1rem;
		color: ${({ theme }) => theme.color.gray500};

		&.active {
			color: ${({ theme }) => theme.color.white};
		}
	}
`

export function ProductRating({ rating }: { rating: number }) {
	return (
		<ProductRatingStyled flex gap={1}>
			{Array.from({ length: 5 })
				.map((_, i) => ({ id: i }))
				.map((item, i) => (
					<StarIcon key={item.id} className={clsx({ active: i < rating })} />
				))}
		</ProductRatingStyled>
	)
}
