'use client'

import { SVGCirlceBackground } from '@components/common/DonutChart/DounutChart.styled'
import { useDonutChartContext } from '@components/common/DonutChart/context/useDonutChartContext'
import { useLayoutEffect, useState } from 'react'

export const Background = () => {
	const [isMounted, setIsMounted] = useState(false)
	const { size, radius } = useDonutChartContext()

	useLayoutEffect(() => {
		if (!isMounted) {
			setIsMounted(true)
		}
	}, [isMounted])

	return isMounted && <SVGCirlceBackground cx={size / 2} cy={size / 2} r={radius} />
}
