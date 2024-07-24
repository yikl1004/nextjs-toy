'use client'

import styled from '@emotion/styled'
import { type Theme, css } from '@emotion/react'
import { isNumber } from '@repo/utils'

const gapCss = (count: number | { x?: number; y?: number }) => {
	if (isNumber(count)) {
		return css`
			gap: ${0.25 * count}rem;
		`
	}
	const x = count.x
		? css`
				-moz-column-gap: ${count.x * 0.25}rem;
				column-gap: ${count.x * 0.25}rem;
			`
		: ''
	const y = count.y
		? css`
				row-gap: ${count.y * 0.25}rem;
			`
		: ''

	return css([x, y])
}

export interface GridStyledProps {
	cols?: number
	gap?:
		| number
		| {
				x?: number
				y?: number
		  }
	lg?: {
		cols?: number
	}
}

const lgCss = (lg: { cols?: number }, theme: Theme) => {
	if (lg.cols && lg.cols > 0) {
		return css`
			/* @media lg */
			${theme.mediaQueries.over.lg} {
				grid-template-columns: repeat(${lg.cols}, minmax(0, 1fr));
			}
		`
	}

	return ''
}

export const Grid = styled('div')<GridStyledProps>`
	display: grid;
	grid-template-columns: repeat(${({ cols }) => cols}, minmax(0, 1fr));
	${({ gap }) => isNumber(gap) && gapCss(gap)}
	${({ lg, theme }) => lg && lgCss(lg, theme)}
`
