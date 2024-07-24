'use client'

import { createContext } from 'react'
import type { Options } from '../line-chart'

interface LineChartState {
	itemWidth: number // percentage(%)
	wrapperWidth: number
	isExpandedTooltip: number
	data: number[]
	polylinePoints: string
	options?: Options
}

export const lineChartStateContext = createContext<LineChartState>({
	itemWidth: NaN,
	wrapperWidth: 0,
	isExpandedTooltip: NaN,
	data: [],
	polylinePoints: '',
})

export const LineChartStateProvider = lineChartStateContext.Provider

interface LineChartAction {
	onToggleTooltip(index: number): void
}

export const lineChartActionContext = createContext<LineChartAction>({
	onToggleTooltip: () => {},
})

export const LineChartActionProvider = lineChartActionContext.Provider
