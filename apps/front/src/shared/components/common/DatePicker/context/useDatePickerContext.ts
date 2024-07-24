'use client'

import { useContext } from 'react'
import { datepickerActionContext, datepickerStateContext } from '.'

export const useDatePickerContext = () => {
	const actions = useContext(datepickerActionContext)
	const states = useContext(datepickerStateContext)

	return {
		...actions,
		...states,
	}
}
