'use client'

import { DonutChartContainer } from '@components/common/DonutChart2/DonutChartContainer'
import { Mask } from './Mask'
import { Circle } from './Circle'
import { DonutChartProvider } from './context/provider'
import type { Data, Spacing } from './types'

interface DonutChart2Props {
	data: Data[]
	size: number
	thickness?: number
	spacing?: Spacing
}

export const DonutChart2 = ({ data, size, thickness = 20, spacing }: DonutChart2Props) => {
	return (
		<DonutChartProvider data={data} size={size} thickness={thickness} spacing={spacing}>
			<DonutChartContainer>
				<Mask spacing={spacing} />
				<Circle />
			</DonutChartContainer>
		</DonutChartProvider>
	)
}
