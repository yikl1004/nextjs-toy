import { useCallback, useState } from 'react'
import { dayjs, isUndefined } from '@repo/utils'
import ReactDatePicker from 'react-datepicker'
import { DatePickerStateProvider, type DateOrNull, DatePickerActionProvider } from '.'

interface DatePickerProviderProps extends React.StrictPropsWithChildren {
	isLoading?: boolean
	selected?: Date | null
	getExcludeDatesByMonth?(params: { year: string; month: string }): Promise<string[]>
	onChange(value: string): void
}

export const DatePickerProvider = ({
	children,
	isLoading,
	selected,
	getExcludeDatesByMonth,
	onChange,
}: DatePickerProviderProps) => {
	const [date, setDate] = useState<DateOrNull>(() => {
		return selected ?? dayjs().toDate()
	})
	const [ref, setRef] = useState<ReactDatePicker | null>(null)
	const [loading, setLoading] = useState<boolean>(() => {
		return isUndefined(isLoading) ? false : isLoading
	})
	const [excludeDates, setExcludeDates] = useState<Date[]>([])

	const handleDate = useCallback((dateValue: DateOrNull) => {
		setDate(dateValue)
	}, [])

	const handleChangeBeforeAsync = useCallback(
		async (params: { year: string; month: string }) => {
			if (getExcludeDatesByMonth) {
				setLoading(true)
				const result = await getExcludeDatesByMonth(params).then((res) =>
					setExcludeDates(res.map((dateItem) => dayjs(dateItem).toDate())),
				)
				setLoading(false)
				return result
			}
			return undefined
		},
		[getExcludeDatesByMonth],
	)

	return (
		<DatePickerStateProvider
			value={{ date, datepickerRef: ref, isLoading: loading, excludeDates }}
		>
			<DatePickerActionProvider
				value={{
					handleDate,
					setRef,
					getExcludeDatesByMonth: handleChangeBeforeAsync,
					onChange,
				}}
			>
				{children}
			</DatePickerActionProvider>
		</DatePickerStateProvider>
	)
}
