'use client'

import { Loading } from '@components/common/DatePicker/Loading'
import { DatePickerProvider } from './context/provider'
import { DatePickerOriginal } from './DatePickerOriginal'

import 'react-datepicker/dist/react-datepicker.css'

/**
 * 날짜 포메팅 예시
 * const fromServerValue = '2024-02-15T17:23'
 * dayjs(fromServerValue).toDate()
 */

interface DatePickerProps {
	selected: Date | null
	getExcludeDatesByMonth?(params: { year: string; month: string }): Promise<string[]>
	onChange(value: string): void
}

export const DatePicker = ({ selected, getExcludeDatesByMonth, onChange }: DatePickerProps) => {
	return (
		<DatePickerProvider
			selected={selected}
			getExcludeDatesByMonth={getExcludeDatesByMonth}
			onChange={onChange}
		>
			<Loading />
			<DatePickerOriginal />
		</DatePickerProvider>
	)
}
