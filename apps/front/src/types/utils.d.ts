import type { SVGProps } from 'react'

declare global {
	/**
	 * @description 배열 타입에서 원소타입을 추출
	 *
	 * @example
	 * ```ts
	 * // case 1
	 *
	 * type MyType = { a: 1, b: 2 }
	 * type MyTypeList = MyType[]
	 * type Result = ArrayElement<MyTypeList>   // result: MyType
	 *
	 * // case 2 - 1
	 * const array = [1, 'a', '2', 'www']
	 * type Result = ArrayElement<typeof array> // result: string | number
	 *
	 * // case 2 - 2
	 * const array = [1, 'a', '2', 'www'] as const
	 * type Result = ArrayElement<typeof array> // result: never, 사용할수 없는 타입니다.
	 * ```
	 */
	type ArrayElement<T> = T extends (infer U)[] ? U : never

	/**
	 * @description
	 * 0을 제외한 모든 숫자
	 */
	type NonZeroNumber = number & { __nonZeroNumber: never }

	/**
	 * @descriuption
	 * 음수를 제외한 모든 숫자
	 */
	type NonNagativeNumber = number & { __nonNegativeNumber: never }

	/**
	 * @description
	 * 0과 음수를 제외한 모든 숫자 (양수)
	 */
	type PositiveNumber = number & { __positiveNumber: never }

	/**
	 * @description SVG Component props
	 */
	type SVGComponentProps = SVGProps<SVGSVGElement>

	/**
	 * @description Promise를 반환하는 async/await 함수의 실제 반환값을 추출
	 */
	type PromiseReturnType<T> = T extends Promise<infer R> ? R : T

	/**
	 * @description object의 value만 추출
	 */
	type ValueOf<T> = T[keyof T]
}
