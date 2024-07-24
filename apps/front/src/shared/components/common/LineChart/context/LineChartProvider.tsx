'use client'

import { useCallback, useMemo, useState } from 'react'
import { LineChartActionProvider, LineChartStateProvider } from './context'
import type { Options } from '../line-chart'

interface LineChartProviderProps extends React.StrictPropsWithChildren {
	itemWidth: number
	wrapperWidth: number
	data: number[]
	options?: Options
}

export const LineChartProvider = ({
	children,
	itemWidth,
	data,
	wrapperWidth,
	options,
}: LineChartProviderProps) => {
	const [isExpandedTooltip, setIsExpandedTooltip] = useState(NaN)

	const polylinePoints = useMemo(() => {
		const getXAxis = (index: number) => {
			return index * (wrapperWidth / data.length)
		}

		return data.map((dataItem, index) => `${getXAxis(index)}, ${dataItem * 2}`).join(' ')
	}, [data, wrapperWidth])

	const onToggleTooltip = useCallback((index: number) => {
		setIsExpandedTooltip((prev) => {
			return prev === index ? NaN : index
		})
	}, [])

	return (
		<LineChartStateProvider
			value={{
				isExpandedTooltip,
				itemWidth,
				data,
				wrapperWidth,
				polylinePoints,
				options,
			}}
		>
			<LineChartActionProvider
				value={{
					onToggleTooltip,
				}}
			>
				{children}
			</LineChartActionProvider>
		</LineChartStateProvider>
	)
}
