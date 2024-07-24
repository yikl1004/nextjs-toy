'use client'

import { Spacing } from './types'
import { useDonutChartContext } from './context/useDonutChartContext'
import { MaskLine } from './MaskLine'

interface MaskProps {
	spacing?: Spacing
}

export const Mask = ({ spacing }: MaskProps) => {
	const { data, maskId } = useDonutChartContext()

	return spacing ? (
		<defs>
			<mask id={maskId}>
				<rect width="100%" height="100%" fill="#ffffff" />
				{data.map(({ category }, index) => (
					<MaskLine key={category} index={index} />
				))}
			</mask>
		</defs>
	) : null
}
