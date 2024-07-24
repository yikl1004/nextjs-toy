import { PathStyled } from './DonutChart.styled'
import { useDonutChartContext } from './context/useDonutChartContext'

interface PieceProps {
	index: number
}

export const Path = ({ index }: PieceProps) => {
	const { state, getArc } = useDonutChartContext({ index })

	return (
		<PathStyled
			fill={state.color}
			d={state.arc}
			rotate={-state.rotateDegree}
			initial={{ d: getArc({ degree: 0, radius: 90, x: 90, y: 90 }) }}
			animate={{ d: state.arc }}
			transition={{ duration: 2, ease: 'easeInOut' }}
		/>
	)
}
