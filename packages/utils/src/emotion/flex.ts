import type { CSSProperties } from 'react'
import { css, type SerializedStyles } from '@emotion/react'
import { isObject } from '..'

export interface FlexOptions {
	align?: CSSProperties['alignItems']
	justify?: CSSProperties['justifyContent']
	direction?: CSSProperties['flexDirection']
}

export function flex(options?: FlexOptions): SerializedStyles
export function flex(
	align: CSSProperties['alignItems'],
	justify: CSSProperties['justifyContent'],
	direction: CSSProperties['flexDirection'],
): SerializedStyles
export function flex(
	alignOrFlexOptions: FlexOptions | CSSProperties['alignItems'],
	justify = 'flex-start',
	direction = 'row',
) {
	if (isObject(alignOrFlexOptions)) {
		const {
			align = 'stretch',
			direction: directionOption = 'row',
			justify: justifyOption = 'flex-start',
		} = alignOrFlexOptions as FlexOptions

		return css`
			align-items: ${align};
			display: flex;
			flex-direction: ${directionOption};
			justify-content: ${justifyOption};
		`
	}

	return css`
		align-items: ${alignOrFlexOptions};
		display: flex;
		flex-direction: ${direction};
		justify-content: ${justify};
	`
}

flex.center = (direction?: FlexOptions['direction']) =>
	flex({ justify: 'center', align: 'center', direction })
