import { isFunction } from './isFunction'

/**
 *
 * @param statement 평가될 식 또는 값
 * @param {(() => T) | T} truthy 참으로 평가될 때 실행되는 함수
 * @param {(() => F) | F} falsy 거짓으로 평가될 때 실행되는 함수
 * @returns {T | F}
 */
export const condition = <T, F>(
	statement: unknown,
	truthy: (() => T) | T,
	falsy: (() => F) | F,
): T | F => {
	const truthyFn = isFunction(truthy) ? truthy : () => truthy
	const falsyFn = isFunction(falsy) ? falsy : () => falsy

	return statement ? truthyFn() : falsyFn()
}
