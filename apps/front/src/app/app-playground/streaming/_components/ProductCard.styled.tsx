'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { position } from '@repo/utils/emotion'

export const ProductCardStyled = styled(Link)`
	display: block;

	&:hover {
		.visual {
			.image {
				opacity: 0.8;
			}
		}

		.product-name {
			color: ${({ theme }) => theme.color.vercel_cyan};
		}
	}

	.visual {
		position: relative;

		.badge {
			${position.absolute({ left: 2, top: 2 })}
			z-index: 10;
			display: flex;
		}

		.image {
			filter: grayscale(100%);
			border-radius: 0.75rem;
		}
	}

	.product-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: ${({ theme }) => theme.color.white};
	}
`
