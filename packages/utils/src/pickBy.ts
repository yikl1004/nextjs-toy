/* eslint-disable @rushstack/no-new-null */
/**
 * @name pickBy
 * @description object에서 원하는 key를 가진 object를 반환
 * - 값이 null 또는 undefined인 경우 필드를 삭제하여 반환
 * - TODO: 두번째 매개변수로 원하는 프로퍼티를 선택할수 있게,
 * - TODO: 세번째 매개변수로 callback을 받을 수 있게
 */
export function pickBy<T extends object>(object: T | null | undefined): Partial<T> {
	const obj: Partial<T> = {}

	if (!object) {
		return {}
	}

	Object.entries(object).forEach(([key, value]) => {
		if (typeof value !== 'undefined' && value !== null) {
			Object.defineProperty(obj, key, { value })
		}
	})

	return obj
}
