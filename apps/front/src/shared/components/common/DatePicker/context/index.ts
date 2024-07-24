import { dayjs } from '@repo/utils'
import { createContext } from 'react'
import ReactDatePicker from 'react-datepicker'

export type DateOrNull = Date | null

interface DatePickerState {
	isLoading: boolean
	date: DateOrNull
	datepickerRef: ReactDatePicker | null
	excludeDates: Date[]
}

export const datepickerStateContext = createContext<DatePickerState>({
	isLoading: false,
	date: dayjs().toDate(),
	excludeDates: [],
	datepickerRef: null,
})

export const DatePickerStateProvider = datepickerStateContext.Provider

interface DatePickerAction {
	handleDate: (date: DateOrNull) => void
	setRef: (datepickerRef: ReactDatePicker | null) => void
	getExcludeDatesByMonth(...args: unknown[]): Promise<void>
	onChange(value: string): void
}

export const datepickerActionContext = createContext<DatePickerAction>({
	handleDate: () => {},
	setRef: () => {},
	getExcludeDatesByMonth: async () => {},
	onChange: () => {},
})

export const DatePickerActionProvider = datepickerActionContext.Provider
