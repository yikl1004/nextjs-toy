'use client'

import styled from '@emotion/styled'
import { shimmerCss } from '@style/css'
import { margin, padding } from '@repo/utils/emotion'
import { Grid } from '@component/Grid.styled'

export const RenderingPageSkeletonStyled = styled(Grid)`
	.title {
		height: 2rem;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray700};
		${({ theme }) => shimmerCss(true, theme.keyframes.shimmer)}
	}

	.paragraph {
		height: 72px;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray800};
		${({ theme }) => shimmerCss(true, theme.keyframes.shimmer)}
	}

	.section {
		order: -1;
		grid-column: 1 / -1;

		/* @media lg */
		${({ theme }) => theme.mediaQueries.over.lg} {
			order: 0;
			grid-column: span 2 / span 2;
		}

		.inner {
			${padding(3)}
			border-radius: 0.5rem;
			background-color: ${({ theme }) => theme.color.gray900};
			${({ theme }) => shimmerCss(true, theme.keyframes.shimmer)}

			& > :not([hidden]) ~ :not([hidden]) {
				${margin({ top: 3, bottom: 0 })}
			}

			.item-1 {
				height: 1.25rem;
				border-radius: 0.5rem;
				background-color: ${({ theme }) => theme.color.gray700};

				/* @media lg */
				${({ theme }) => theme.mediaQueries.over.lg} {
					height: 2.5rem;
				}
			}

			.item-2 {
				height: 1.5rem;
				width: 4rem;
				border-radius: 9999px;
				background-color: ${({ theme }) => theme.color.gray300};
			}
		}
	}
`
