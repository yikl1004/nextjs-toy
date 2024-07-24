'use client'

import { Background } from './Background'
import { DonutChartContainer } from './DounutChart.styled'
import { Legends } from './Legends'
import { DonutChartProvider } from './context/provider'
import { DataItem } from './types'
import { Part } from './Part'

interface DonutChartProps {
	size?: number
	data: DataItem[]
}

/**
 * TODO:
 * 1.
 */

export const DonutChart = ({ size = 180, data }: DonutChartProps) => {
	return (
		<DonutChartProvider data={data} size={size} radius={65} circumference={2 * Math.PI * 65}>
			<DonutChartContainer>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
				>
					{/* chart */}
					{data
						.map((item, index) => ({ item, id: index + 1 }))
						.map(({ id }, index) => (
							<Part index={index} key={id} />
						))}
					{/* chart bg circle */}
					<Background />
				</svg>
			</DonutChartContainer>
			<Legends />
		</DonutChartProvider>
	)
}
