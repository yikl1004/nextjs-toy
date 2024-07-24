import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { isNil, isNumber, isString } from '..'
import { coerceCssPixelValue as c } from './coerceCssPixelValue'
import { type CSSPixelValue } from './types'

interface BoxSpacingOptionObject {
	x?: never
	y?: never
	top?: never
	bottom?: never
	left?: never
	right?: never
}

type BoxSpacingOptionObjectCase<Option extends keyof BoxSpacingOptionObject> = {
	[O in Option]?: CSSPixelValue
} & {
	[P in Exclude<keyof BoxSpacingOptionObject, Option>]?: never
}

export type BoxSpacingOption =
	| BoxSpacingOptionObjectCase<'x' | 'y'>
	| BoxSpacingOptionObjectCase<'x' | 'top' | 'bottom'>
	| BoxSpacingOptionObjectCase<'y' | 'left' | 'right'>
	| BoxSpacingOptionObjectCase<'top' | 'right' | 'bottom' | 'left'>
	| CSSPixelValue

export function spacing(
	cssProperty: 'margin' | 'padding',
	option: BoxSpacingOption,
): SerializedStyles {
	if (isNumber(option) || isString(option)) {
		const style = `${cssProperty}: ${c(option)};`

		return css`
			${style}
		`
	}

	const box: {
		top?: CSSPixelValue
		right?: CSSPixelValue
		bottom?: CSSPixelValue
		left?: CSSPixelValue
	} = {}

	if (option.x !== undefined) {
		box.left = option.x
		box.right = option.x
	}

	if (option.y !== undefined) {
		box.top = option.y
		box.bottom = option.y
	}

	if (option.top !== undefined) {
		box.top = option.top
	}

	if (option.right !== undefined) {
		box.right = option.right
	}

	if (option.bottom !== undefined) {
		box.bottom = option.bottom
	}

	if (option.left !== undefined) {
		box.left = option.left
	}

	if (!isNil(box.top) && !isNil(box.right) && !isNil(box.bottom) && !isNil(box.left)) {
		const style = css(
			`${cssProperty}: ${c(box.top)} ${c(box.right)} ${c(box.bottom)} ${c(box.left)};`,
		)

		return style
	}

	const style = Object.entries(box)
		.filter(([, value]) => value !== null)
		.map(([dir, value]) => `${cssProperty}-${dir}: ${c(value!)}`)
		.join(';')

	return css`
		${style};
	`
}

type Property = 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left'

export interface BoxSpacingPresets {
	readonly x: (value: CSSPixelValue) => SerializedStyles
	readonly y: (value: CSSPixelValue) => SerializedStyles
	readonly top: (value: CSSPixelValue) => SerializedStyles
	readonly right: (value: CSSPixelValue) => SerializedStyles
	readonly bottom: (value: CSSPixelValue) => SerializedStyles
	readonly left: (value: CSSPixelValue) => SerializedStyles
}

export interface BoxSpacing extends BoxSpacingPresets {
	(option: BoxSpacingOption): SerializedStyles
}

const properties: Property[] = ['x', 'y', 'top', 'right', 'bottom', 'left']

function createSpacingWithProperty(cssProperty: 'margin' | 'padding') {
	const _spacing = (option: BoxSpacingOption) => spacing(cssProperty, option)

	properties.forEach((property) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		;(_spacing as any)[property] = (value: CSSPixelValue) =>
			spacing(cssProperty, { [property]: value })
	})

	return _spacing as BoxSpacing
}

export const padding = createSpacingWithProperty('padding')
export const margin = createSpacingWithProperty('margin')
