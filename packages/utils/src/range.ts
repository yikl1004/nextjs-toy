/**
 *
 * @param start 시작할 숫자
 * @param end 종료될 숫자
 * @returns 결과값
 */
export function range(start: number, end: number) {
	const array = []
	for (let i = start; i <= end; i += 1) {
		array.push(i)
	}

	return array
}
