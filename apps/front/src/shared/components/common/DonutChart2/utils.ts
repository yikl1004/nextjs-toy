import type { ArcData } from './types'

/**
 * 객체 배열에서 특정 숫자 속성의 총합을 계산합니다.
 * @typedef {object} T
 * @template T - 배열의 객체 유형입니다. 객체 유형이어야 합니다.
 * @param {T[]} data - T 유형의 객체 배열입니다.
 * @param {keyof T} propName - 배열의 객체에서 합산할 숫자 값을 가지고 있는 속성 이름입니다.
 * @returns {number} 숫자 속성의 총합입니다.
 */
export const total = <T extends object>(data: T[], propName: keyof T): number => {
	return data.reduce((acc, cur) => acc + (cur[propName] as number), 0)
}

/**
 * 각도에 따른 radian 값을 구하는 함수
 * @note Math.cos, Math.sin 을 사용할 땐 radian 단위가 필요
 */
const getRadian = (degree: number) => {
	return (degree / 180) * Math.PI
}

/** data index에 따른 호의 정보(ArcData)를 구하는 함수 */
export const getArcData = (areaDegree: number, size: number) => {
	return {
		x: (size * 1.2) / 2,
		y: (size * 1.2) / 2,
		radius: (size * 0.8) / 2, // 반지름
		degree: areaDegree,
	}
}

/** x, y 좌표, degree(각도), radius(반지름) 을 받아 삼각함수에 따른 좌표를 구하는 함수 */
export const getCoordsOnCircle = ({ x, y, radius, degree }: ArcData) => ({
	x: x + radius * Math.cos(getRadian(degree)),
	y: y + radius * Math.sin(getRadian(degree)),
})

/** 저장된 data 중 해당 index 의 비율을 구하는 함수 */
// const getRatio = (data: DataList, index: number | undefined, by: number = 100) => {
// 	if (typeof index === 'undefined') return NaN
// 	const totalCount = total(data, 'count')
// 	const count = data.at(index)?.count ?? NaN
// 	const beforeRounded = (count / totalCount) * by

// 	return parseFloat(`${Math.round(parseFloat(`${beforeRounded}e+2`))}e-2`)
// }
