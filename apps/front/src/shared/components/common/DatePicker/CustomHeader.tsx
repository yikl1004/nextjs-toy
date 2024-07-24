'use client'

import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import { dayjs } from '@repo/utils'
import { TodayButton } from './TodayButton'

interface CustumDatePickerHeader extends ReactDatePickerCustomHeaderProps {
	onClose(): void
	getExcludeDatesByMonth?(params: { year: string; month: string }): Promise<void>
}

export const CustomHeader = ({
	date,
	// changeYear,
	// changeMonth,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
	onClose,
	getExcludeDatesByMonth = async () => {},
}: CustumDatePickerHeader) => {
	const selectedDate = dayjs(date)

	const getMonthString = (month: number) => {
		const m = month + 1
		return month.toString().length === 1 ? `0${m}` : `${m}`
	}

	const prev = () => {
		if (getExcludeDatesByMonth) {
			const prevParams = selectedDate.subtract(1, 'month')
			getExcludeDatesByMonth({
				year: `${prevParams.get('year')}`,
				month: getMonthString(prevParams.get('month')),
			})
				.then(decreaseMonth)
				.catch(() => {
					return new Error('failed to decrease month')
				})
		} else {
			decreaseMonth()
		}
	}

	const next = () => {
		if (getExcludeDatesByMonth) {
			const nextParams = selectedDate.add(1, 'month')
			getExcludeDatesByMonth({
				year: `${nextParams.get('year')}`,
				month: getMonthString(nextParams.get('month')),
			})
				.then(increaseMonth)
				.catch(() => {
					return new Error('failed to increase month')
				})
		} else {
			increaseMonth()
		}
	}

	return (
		<div style={{ margin: 10, display: 'flex', justifyContent: 'center' }}>
			<TodayButton text="오늘" />
			<button type="button" onClick={prev} disabled={prevMonthButtonDisabled}>
				이전
			</button>
			<span className="year">{dayjs(date).get('year')}년</span>
			<span className="month">{dayjs(date).get('month') + 1}월</span>
			<button type="button" onClick={next} disabled={nextMonthButtonDisabled}>
				다음
			</button>
			<button type="button" onClick={onClose}>
				닫기
			</button>
		</div>
	)
}
