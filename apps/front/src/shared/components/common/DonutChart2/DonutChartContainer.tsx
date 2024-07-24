import { DonutChartContainerStyled } from './DonutChart.styled'
import { useDonutChartContext } from './context/useDonutChartContext'

export const DonutChartContainer = ({ children }: { children: React.ReactNode }) => {
	const { size } = useDonutChartContext()

	return (
		<DonutChartContainerStyled>
			<svg width={size} height={size} viewBox={`0 0 ${size * 1.2} ${size * 1.2}`}>
				{children}
			</svg>
		</DonutChartContainerStyled>
	)
}
