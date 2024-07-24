'use client'

import styled from '@emotion/styled'
import { type Theme, css, type SerializedStyles } from '@emotion/react'
import { margin, padding } from '@repo/utils/emotion'
import { isNumber } from '@repo/utils'

const colSpanCss = (colSpan: { count: number | 'full'; lg?: number }, theme: Theme) => {
	let count: SerializedStyles = css``
	let lg: SerializedStyles = css``

	if (Object.is(colSpan.count, 'full')) {
		count = css`
			grid-column: 1 / -1;
		`
	} else {
		count = css`
			grid-column: span ${colSpan.count} / span ${colSpan.count};
		`
	}

	if (colSpan.lg) {
		lg = css`
			/* @media lg */
			${theme.mediaQueries.over.lg} {
				grid-column: span ${colSpan.lg} / span ${colSpan.lg};
			}
		`
	}

	return css([count, lg])
}

interface LgCss {
	grid?: boolean
	cols?: number
	gap?: number
	spaceY?: number
	colSpan?: number
}
const lgCss = (lg: LgCss | undefined, theme: Theme) => css`
	/* @media lg */
	${theme.mediaQueries.over.lg} {
		${lg?.colSpan ? `grid-column: span ${lg.colSpan} / span ${lg.colSpan};` : ''}
		${lg?.grid ? 'display: grid;' : ''}
        ${lg?.cols ? `grid-template-columns: repeat(${lg.cols}, minmax(0, 1fr));` : ''}
        ${lg?.gap ? `gap: ${theme.spacing * lg.gap}rem;` : ''}
        ${isNumber(lg?.spaceY) &&
		Object.is(lg.spaceY, 14) &&
		`
            & > :not([hidden]) ~ :not([hidden]) {
                ${margin({ top: 14, bottom: 0 })}
            }
        `}
	}
`

export interface SpacerStyledProps {
	vertical: number
	px?: number
	pt?: number
	pb?: number
	mt?: number
	colSpan?: { count: number | 'full'; lg?: number }
	lg?: LgCss
}

export const Spacer = styled('div')<SpacerStyledProps>`
	& > :not([hidden]) ~ :not([hidden]) {
		${({ vertical }) => margin({ top: vertical, bottom: 0 })}
	}

	${({ px }) => isNumber(px) && padding.x(px)}
	${({ pt }) => isNumber(pt) && padding.top(pt)}
    ${({ pb }) => isNumber(pb) && padding.bottom(pb)}
    ${({ colSpan, theme }) => colSpan && colSpanCss(colSpan, theme)}
    ${({ lg, theme }) => lg && lgCss(lg, theme)}
    ${({ mt }) => isNumber(mt) && margin.top(mt)}
`
