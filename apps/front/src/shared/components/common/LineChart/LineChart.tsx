'use client'

import { useEffect, useRef, useState } from 'react'
import { LineChartContainer } from '@components/common/LineChart/LineChart.styled'
import { Line } from './Line'
import { Point } from './Point'
import { LineChartProvider } from './context/LineChartProvider'
import type { Options } from './line-chart'

interface LineChartProps {
	data: number[]
	options?: Options
}

export const LineChart = ({ data, options }: LineChartProps) => {
	const [isMounted, setIsMounted] = useState(false)
	const [wrapperWidth, setWrapperWidth] = useState(0)
	const pointContainerRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true)

			const originWidth = pointContainerRef.current!.getBoundingClientRect().width ?? 0
			const style = pointContainerRef.current
				? window.getComputedStyle(pointContainerRef.current)
				: { paddingLeft: '0', paddingRight: '0' }
			setWrapperWidth(
				originWidth - (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)),
			)
		}
	}, [isMounted])

	return (
		<LineChartProvider
			data={data}
			options={options}
			itemWidth={100 / (data.length - 1)}
			wrapperWidth={wrapperWidth}
		>
			<LineChartContainer length={10}>
				<div className="graph_inner">
					<ul className="graph_bg" ref={pointContainerRef}>
						{data
							.map((_, index) => ({ id: index }))
							.map(({ id }, index) => (
								<Point key={`${id}`} as="li" index={index} />
							))}
					</ul>
					{isMounted && <Line />}
				</div>
			</LineChartContainer>
		</LineChartProvider>
	)
}
