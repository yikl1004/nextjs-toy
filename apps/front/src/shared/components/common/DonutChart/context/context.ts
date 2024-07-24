import { createContext } from 'react'
import type { DataItem } from '../types'

export interface DonutChartStateContextProps {
	data: DataItem[]
	radius: number
	circumference: number
	size: number
}

export const donutChartStateContext = createContext<DonutChartStateContextProps>({
	data: [],
	radius: 0,
	circumference: 0,
	size: 0,
})

export const DonutChartStateProvider = donutChartStateContext.Provider
