'use client'

import { useContext } from 'react'
import { lineChartActionContext, lineChartStateContext } from './context'

export const useLineChartContext = () => {
	const states = useContext(lineChartStateContext)
	const actions = useContext(lineChartActionContext)
	return {
		...states,
		...actions,
	}
}
