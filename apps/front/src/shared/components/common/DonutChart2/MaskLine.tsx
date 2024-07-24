import { useMemo } from 'react'
import { LineStyled } from './DonutChart.styled'
import { useDonutChartContext } from './context/useDonutChartContext'

interface MaskLineProps {
	index: number
}

export const MaskLine = ({ index }: MaskLineProps) => {
	const { spacing, size, state } = useDonutChartContext({ index })

	const coords = useMemo(
		() => ({
			x1: (size * 1.2) / 2,
			y1: (size * 1.2) / 2,
			x2: size * 1.2,
			y2: (size * 1.2) / 2,
		}),
		[size],
	)

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <LineStyled {...coords} strokeWidth={spacing?.stroke} rotate={state.rotateDegree} />
}
