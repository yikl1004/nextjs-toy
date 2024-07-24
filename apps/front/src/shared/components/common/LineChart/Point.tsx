'use client'

import { PointA11y, PointButton, PointContainer, PointTip, PointTitle } from './LineChart.styled'
import { useLineChartContext } from './context/useLineChartState'

interface PointProps {
	index: number
	as?: React.ElementType
}

export const Point = ({ index, as }: PointProps) => {
	const { isExpandedTooltip, itemWidth, data, options, onToggleTooltip } = useLineChartContext()

	const isExpanded = isExpandedTooltip === index

	return (
		<PointContainer as={as} width={itemWidth} index={index + 1}>
			<PointTitle>{index + 1}</PointTitle>
			<PointButton
				type="button"
				animateDelay={index}
				aria-expanded={isExpanded}
				count={data.at(index) ?? 0}
				size={options?.pointer.size}
				onClick={() => onToggleTooltip(index)}
			>
				<PointA11y>정확한 수치 보기</PointA11y>
			</PointButton>
			<PointTip isExpanded={isExpanded}>
				<strong>{data.at(index)}</strong>
			</PointTip>
		</PointContainer>
	)
}

// export const Point = memo(Component)
