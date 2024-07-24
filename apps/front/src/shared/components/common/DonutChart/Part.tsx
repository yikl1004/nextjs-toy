import { useCallback } from 'react'
import { SVGCircle } from './DounutChart.styled'
import { useDonutChartContext } from './context/useDonutChartContext'

interface PartProps {
	index: number
}

export const Part = ({ index }: PartProps) => {
	const { circumference, radius, size, data, getStrokeDashoffset } = useDonutChartContext()

	const getRotateFomular = useCallback(
		(indexArg: number) => {
			if (indexArg === 0) return 0

			return data.reduce((acc, cur, idx, arr) => {
				let copied = acc
				if (idx !== 0 && idx <= index) {
					copied += arr[idx - 1].percentage as number
				}
				return copied
			}, 0)
		},
		[data, index],
	)

	return (
		<SVGCircle
			cx={size / 2}
			cy={size / 2}
			r={radius}
			strokeDasharray={circumference}
			dashoffset={getStrokeDashoffset(index)}
			cssTransform={`rotate(${3.6 * getRotateFomular(index)}deg)`}
			stroke={data[index].color}
		/>
	)
}
