'use client'

import { createContext } from 'react'
import { DonutChartState } from '../types'

export const donutChartStateContext = createContext<DonutChartState>({
	maxDgree: 359.9,
	data: [],
	size: 180,
	thickness: 20,
	maskId: '',
	arcData: [],
	ratioBy360Degree: [],
})

export const DonutChartStateProvider = donutChartStateContext.Provider
