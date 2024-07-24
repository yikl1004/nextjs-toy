'use client'

import { useCallback, useId, useState } from 'react'
import { Data, Spacing } from '../types'
import { roundTo } from '../roundTo'
import { DonutChartStateProvider } from './context'
import { total } from '../utils'

interface DonuChart2ProviderProps extends React.StrictPropsWithChildren {
	data: Omit<Data, 'percent'>[]
	size: number
	thickness: number
	spacing?: Spacing
}

export const DonutChartProvider = ({
	children,
	data,
	size,
	thickness,
	spacing,
}: DonuChart2ProviderProps) => {
	/** 360도에 비례한 data[index].count 만큼의 각을 구한다. 각 data의 수만큼 배열에 적재 */
	const [ratioBy360Degree] = useState(
		data.map((item, index, array) => {
			const totalCount = total(array, 'count')
			const count = array.at(index)?.count ?? NaN
			const beforeRounded = (count / totalCount) * 360

			return parseFloat(`${Math.round(parseFloat(`${beforeRounded}e+2`))}e-2`)
		}),
	)
	/** mask에 사용되는 id attribute */
	const maskId = useId()
	const sum = total(data, 'count')

	const computedData = data.map((currentItem) => {
		const ratio = (currentItem.count / sum) * 100

		return {
			...currentItem,
			percent: roundTo(ratio, 2),
		}
	})

	const arcData = useCallback(
		(index: number) => {
			return {
				x: (size * 1.2) / 2,
				y: (size * 1.2) / 2,
				radius: (size * 0.8) / 2, // 반지름
				degree: ratioBy360Degree[index],
			}
		},
		[ratioBy360Degree, size],
	)

	return (
		<DonutChartStateProvider
			value={{
				maxDgree: 359.9,
				data: computedData,
				size,
				thickness,
				spacing,
				maskId,
				arcData: data.map((_, index) => arcData(index)),
				ratioBy360Degree,
			}}
		>
			{children}
		</DonutChartStateProvider>
	)
}
