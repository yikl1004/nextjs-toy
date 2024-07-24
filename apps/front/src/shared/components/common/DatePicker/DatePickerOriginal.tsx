'use client'

import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import { dayjs } from '@repo/utils'
import { ko } from 'date-fns/locale/ko'
import { CustomHeader } from './CustomHeader'
import { CustomInput } from './CustomInput'
import { useDatePickerContext } from './context/useDatePickerContext'

// date-fns의 ko locale 적용
registerLocale('ko', ko)

/**
 * 날짜 포메팅 예시
 * conat fromServerValue = '2024-02-15T17:23'
 * dayjs(fromServerValue).toDate()
 */

export const DatePickerOriginal = () => {
	const {
		date,
		handleDate,
		setRef,
		datepickerRef,
		getExcludeDatesByMonth,
		onChange,
		excludeDates,
	} = useDatePickerContext()

	// const excludeDates = [dayjs().add(6, 'd').toDate(), dayjs().subtract(1, 'd').toDate()]

	const handleChange = (dates: Date | null) => {
		handleDate(dates)
		onChange(dayjs(date).format('YYYYMMDD'))
	}

	const handleClose = () => {
		datepickerRef?.setOpen(false)
	}

	return (
		<ReactDatePicker
			ref={setRef}
			locale="ko"
			showPopperArrow={false}
			selected={date}
			onChange={handleChange}
			excludeDates={excludeDates}
			customInput={<CustomInput />}
			renderCustomHeader={(props) => (
				<CustomHeader
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...props}
					onClose={handleClose}
					getExcludeDatesByMonth={getExcludeDatesByMonth}
				/>
			)}
			dayClassName={(d) => {
				// 선택된 날짜의 className
				return dayjs(date).isSame(dayjs(d)) ? 'normal-day selected-day' : 'normal-day'
			}}
		/>
	)
}
