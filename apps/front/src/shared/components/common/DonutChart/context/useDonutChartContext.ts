import { useCallback, useContext } from 'react'
import { donutChartStateContext } from './context'

export const useDonutChartContext = () => {
	const { data, circumference, ...rest } = useContext(donutChartStateContext)

	const getRatio = useCallback(
		(index: number, by: number = 100) => {
			const totalCount = data.reduce((acc, item) => acc + item.count, 0)
			const beforeRounded = (data[index].count / totalCount) * by

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return +`${Math.round(`${beforeRounded}e+2`)}e-2`
		},
		[data],
	)

	const getStrokeDashoffset = useCallback(
		(index: number) => circumference - getRatio(index, circumference),
		[getRatio, circumference],
	)

	return {
		...rest,
		data,
		circumference,
		getStrokeDashoffset,
		getRatio,
	}
}
