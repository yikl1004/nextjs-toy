import { isString } from '..'
import type { CSSPixelValue } from './types'

export function coerceCssPixelValue(value: CSSPixelValue, spacing: number = 0.25): string {
	return isString(value) ? value : `${value * spacing}rem`
}
