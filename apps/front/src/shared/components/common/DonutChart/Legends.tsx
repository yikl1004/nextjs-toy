'use client'

import { LegendItem, LegendsContainer } from './DounutChart.styled'
import { useDonutChartContext } from './context/useDonutChartContext'

export const Legends = () => {
	const { data } = useDonutChartContext()

	return (
		<LegendsContainer>
			{data.map(({ name, color, percentage }) => (
				<LegendItem key={name} color={color}>
					{name} <span>{percentage}</span>%
				</LegendItem>
			))}
		</LegendsContainer>
	)
}
