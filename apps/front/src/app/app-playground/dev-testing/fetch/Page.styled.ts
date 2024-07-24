'use client'

import styled from '@emotion/styled'
import { margin, padding } from '@repo/utils/emotion'

export const PageStyled = styled('div')`
	color: #fff;
	width: 60rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	${margin({ x: 'auto', y: 0 })}
	${padding.y(10)}

	h1 {
		font-size: 2rem;
	}

	div.desc {
		${margin.y(5)}
		${padding({ y: 5, x: 10 })}
		border-radius: 9999px;

		&:nth-child(even) {
			background-color: #242424;
		}

		&:nth-child(odd) {
			background-color: #262626;
		}

		span.api-path {
			${margin.right(10)}
		}

		span[class^='is-'] {
			${margin.x(2)}
		}

		button {
			${padding({ x: 1, y: 1 })}
			background-color: #f5f5f5;
			color: #000;
		}
	}
`

export const ButtonStyled = styled('button')`
	padding: 1rem;
`
