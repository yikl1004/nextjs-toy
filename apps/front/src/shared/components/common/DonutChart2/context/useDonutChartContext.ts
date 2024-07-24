'use client'

import { useCallback, useContext, useMemo, useState } from 'react'
import { donutChartStateContext } from './context'
import type { ArcData, DataList } from '../types'
import { getArcData, getCoordsOnCircle } from '../utils'

export const useDonutChartContext = (props?: { index: number }) => {
	const { maxDgree, data, size, thickness, spacing, maskId, ratioBy360Degree } =
		useContext(donutChartStateContext)
	const [initialState] = useState({
		arc: '',
		degree: NaN,
		rotateDegree: NaN,
		color: '',
		percent: NaN,
	})

	/**
	 * @description x, y를 중심 축으로 하여 degree(θ)만큼 시계 방향으로 호를 그리는 함수
	 * - x, y 좌표, radius(반지름), degree(각도)를 매개변수로 받음
	 * - x, y 좌표는 중심축이기 때문에 정중앙에 위치
	 * - radius(반지름)은 중심축과 호가 시작되는 지점 사이의 거리
	 * - degree(각도)는 0~360 범위 내의 각도를 의미, 실제론 359.9
	 *
	 * @note
	 * - viewBox의 크기가 width, height보다 크면 사용자가 보는 크기는 줄어든것 처럼 보임, svg 입장에선 그릴 수 있는 범위가 늘어남
	 * - 정중앙에 원을 위치시키려면 viewBox의 x, y 좌표를 지정해야 하는데, x는 size의 절반, y도 size의 절반으로 설정
	 * - 위 2가지 조건을 바탕으로 여백을 부여할 수 있다. radius(반지름)이 size 절반의 길이보다 짧으면 여백이 생기는 원리
	 *
	 * @example
	 * size가 "100" 이고 size의 20%만큼 여백을 주려고 한다면
	 * viewBox는 "0 0 {size*1.2} {size*1.2}"가 되고
	 * radius(반지름)은 size 절반의 80%가
	 */
	const getArc = useCallback(
		(arcData?: ArcData) => {
			const { x, y, radius, degree } =
				arcData || getArcData(ratioBy360Degree[props?.index || 0], size)

			// 안쪽 원에 대한 반지름 - 결과적으로 도넛의 두께
			const innerRadius = radius - thickness // borderSize

			// 바깥쪽 원, 호의 시작 좌표
			const startCoord = getCoordsOnCircle({ degree: 0, x, y, radius })
			// 바깥쪽 원, 호의 끝 좌표
			const finishCoord = getCoordsOnCircle({ degree, x, y, radius })
			// 안쪽 원, 호의 시작 좌표
			const innerStartCoord = getCoordsOnCircle({ degree: 0, radius: innerRadius, x, y })
			// 안쪽 원, 호의 끝 좌표
			const innerFinishCoord = getCoordsOnCircle({ degree, x, y, radius: innerRadius })

			// 호의 각도가 180보다 크면 1, 아니면 0
			const isLargeArc = degree > 180 ? 1 : 0
			const isEnd = degree === maxDgree

			// 최초의 좌표 위치로 이동
			const moveTo = `M ${startCoord.x} ${startCoord.y}`
			// 바깥 원의 호
			const ellipticalArc = `A ${radius} ${radius} 0 ${isLargeArc} 1 ${finishCoord.x} ${finishCoord.y}`
			// 바깥 원에서 안쪽 원으로 이어지는 선
			const lineTo = `L ${innerFinishCoord.x} ${innerFinishCoord.y}`
			// 안쪽 원의 호
			const innerEllipticalArc = `A ${innerRadius} ${innerRadius} 0 ${isLargeArc} 0 ${innerStartCoord.x} ${innerStartCoord.y}`
			// 끝인지 아닌지 여부에 따라 `Z` 종료 명령어 삽입
			const end = isEnd ? 'Z' : ''

			return [moveTo, ellipticalArc, lineTo, innerEllipticalArc, end].join(' ')
		},
		[maxDgree, props?.index, ratioBy360Degree, size, thickness],
	)

	/** @description 주입받은 data를 순회하여 해당 index 까지의 누적 각도를 구하는 함수 */
	const getRotateDegree = useCallback(
		(index: number) =>
			data
				.slice(0, index + 1)
				.reduce((accumulate, _, idx) => accumulate + ratioBy360Degree[idx], 0),
		[data, ratioBy360Degree],
	)

	/** @description 계산된 상태 값의 집합 */
	const state = useMemo(() => {
		const isValid =
			typeof props?.index === 'number' && (props.index >= 0 || props.index < data.length)

		if (isValid) {
			const item = data.at(props.index) as ArrayElement<DataList>
			const rotateDegree = getRotateDegree(props.index)

			return {
				arc: getArc(),
				degree: ratioBy360Degree[props.index],
				rotateDegree,
				color: item.color,
				percent: item.percent,
			}
		}

		// if (process.env.NODE_ENV === 'development') {
		// 	// eslint-disable-next-line no-console
		// 	console.warn('`props.index`값이 number가 아니거나 0보다 작거나 data.length')
		// }

		return initialState
	}, [data, getArc, getRotateDegree, initialState, props?.index, ratioBy360Degree])

	return {
		maskId,
		state,
		size,
		spacing,
		data,
		getArc,
	}
}
