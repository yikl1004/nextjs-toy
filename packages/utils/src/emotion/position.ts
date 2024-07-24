import { css, type SerializedStyles } from '@emotion/react'
import type { Property } from 'csstype'
import { CSSPixelValue } from './types'
import { isNumber, isString } from '..'

interface Coordinates {
	top?: CSSPixelValue
	right?: CSSPixelValue
	bottom?: CSSPixelValue
	left?: CSSPixelValue
}

function isPositionValue(value: unknown): value is Property.Position {
	return ['static', 'relative', 'absolute', 'fixed', 'sticky', '-webkit-sticky'].includes(
		value as string,
	)
}

function isCSSPixelValue(value: unknown): value is CSSPixelValue {
	return isString(value) || isNumber(value)
}

function toRem(value: CSSPixelValue, spacing: number) {
	if (isNumber(value)) {
		return `${spacing * value}rem`
	}

	return value
}

/**
 * @name position
 * @description
 * CSS `position`과 `position`에 연관된 프로퍼티(`top`, `right`, `bottom`, `left`)를 쉽게 선언할 수 있도록 하는 shorthand 유틸리티입니다.
 *
 * ```ts
 * type CSSPixelValue = string | number;
 *
 * function position(
 *   position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky',
 *   top: CSSPixelValue,
 *   right: CSSPixelValue,
 *   bottom: CSSPixelValue,
 *   left: CSSPixelValue
 * ): SerializedStyles;
 *
 * function position(
 *   top: CSSPixelValue,
 *   right: CSSPixelValue,
 *   bottom: CSSPixelValue,
 *   left: CSSPixelValue
 * ): SerializedStyles;
 * ```
 *
 * @example
 * import { position } from '@toss/emotion-utils';
import { isNumber } from '../isNumber';
import { isUndefined } from '../isUndefined';
 *
 * const fullPageLayer = position('fixed', 0, 0, 0, 0);
 * // 위 코드는 아래 코드와 동치입니다.
 * const fullPageLayer = css`
 *   position: fixed;
 *   top: 0;
 *   right: 0;
 *   bottom: 0;
 *   left: 0;
 * `;
 *
 * // 첫번째 인자를 생략하고 `top` 부터 넘길 수 있습니다.
 * const allZero = position(0, 0, 0, 0);
 *
 * // 다음처럼도 사용 가능합니다
 * position('absolute', {top: 0, left: 0});
 *
 * // 다음처럼도 사용 가능합니다(absolute, fixed, sticky)
 * position.absolute(0, 0, 0, ,0);
 * position.absolute({top: 0, left: 0});
 */
export function position(
	positionValue: Property.Position,
	top: CSSPixelValue,
	right: CSSPixelValue,
	bottom: CSSPixelValue,
	left: CSSPixelValue,
): SerializedStyles
export function position(
	top: CSSPixelValue,
	right: CSSPixelValue,
	bottom: CSSPixelValue,
	left: CSSPixelValue,
): SerializedStyles
export function position(
	positionValue: Property.Position,
	coordinates?: Coordinates,
): SerializedStyles
export function position(
	positionOrTop: Property.Position | CSSPixelValue,
	topOrRightOrCoordinates: CSSPixelValue | Coordinates = {},
	...values: CSSPixelValue[]
) {
	const [top, right, bottom, left] = (() => {
		// position(top, right, bottom, left)
		if (!isPositionValue(positionOrTop)) {
			return [positionOrTop, topOrRightOrCoordinates as CSSPixelValue, ...values]
		}

		// position(position, coordinates)
		if (!isCSSPixelValue(topOrRightOrCoordinates)) {
			return [
				topOrRightOrCoordinates.top,
				topOrRightOrCoordinates.right,
				topOrRightOrCoordinates.bottom,
				topOrRightOrCoordinates.left,
			]
		}

		// position(position, top, right, bottom, left)
		return [topOrRightOrCoordinates, ...values]
	})()

	return css`
		${isPositionValue(positionOrTop) ? `position: ${positionOrTop};` : ''}
		${top !== undefined ? `top: ${toRem(top, 0.25)};` : ''}
		${right !== undefined ? `right: ${toRem(right, 0.25)};` : ''}
        ${bottom !== undefined ? `bottom: ${toRem(bottom, 0.25)};` : ''}
        ${left !== undefined ? `left: ${toRem(left, 0.25)};` : ''}
	`
}

function createPosition(pos: Property.Position) {
	function func(coordinates: Coordinates): SerializedStyles
	function func(
		top: CSSPixelValue,
		right: CSSPixelValue,
		bottom: CSSPixelValue,
		left: CSSPixelValue,
	): SerializedStyles
	function func(topOrCoordinates: Coordinates | CSSPixelValue, ...values: CSSPixelValue[]) {
		// position(position, coordinates)
		if (!isCSSPixelValue(topOrCoordinates)) {
			return position(pos, topOrCoordinates)
		}

		// position(position, top, right, bottom, left)
		return position(
			pos,
			topOrCoordinates,
			values[0] as CSSPixelValue,
			values[1] as CSSPixelValue,
			values[2] as CSSPixelValue,
		)
	}

	return func
}

position.absolute = createPosition('absolute')
position.fixed = createPosition('fixed')
position.sticky = createPosition('sticky')
