'use client'

import styled from '@emotion/styled'
import { Spacer } from '@repo/ui'

export const ProductReviewCardStyled = styled(Spacer)`
	.user {
		column-gap: 0.5rem;

		.avatar {
			height: 1.5rem;
			width: 1.5rem;
			border-radius: 9999px;
			background-color: ${({ theme }) => theme.color.gray700};
		}

		.name {
			font-size: 0.875rem;
			line-height: 1.25rem;
			color: ${({ theme }) => theme.color.white};
		}
	}

	.text {
		color: ${({ theme }) => theme.color.gray400};
	}
`
