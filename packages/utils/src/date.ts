/**
 * @name date
 * @description dayjs에 대한 전역설정, dayjs를 date 변수에 저장 후 export
 */

/**
 * @note
 * ~59초 : 1분 미만
 * ~59분 : N분 전
 * ~23시간 : N시간 전
 * ~2일 : N일 전
 * 3일~ : yyyy.mm.dd
 */

import originalDayjs from 'dayjs'
import type { Dayjs as OriginalDayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import ko from 'dayjs/locale/ko'

originalDayjs.locale(ko)
originalDayjs.extend(relativeTime, {
	thresholds: [
		{ l: 's', r: 1 },
		{ l: 'm', r: 1 },
		{ l: 'mm', r: 59, d: 'minute' },
		{ l: 'h', r: 1 },
		{ l: 'hh', r: 23, d: 'hour' },
		{ l: 'd', r: 1 },
		{ l: 'dd', r: 29, d: 'day' },
		{ l: 'M', r: 1 },
		{ l: 'MM', r: 11, d: 'month' },
		{ l: 'y', r: 1 },
		{ l: 'yy', d: 'year' },
	],
})
originalDayjs.extend(updateLocale)
originalDayjs.updateLocale('ko', {
	relativeTime: {
		...originalDayjs.Ls.ko?.relativeTime,
		past: (result: string) => {
			return result.includes('미만') ? result : `${result} 전`
		},
		s: '1분 미만',
		d: '1일',
	},
})

export type Dayjs = OriginalDayjs

export const dayjs = originalDayjs

export const getRelativeTime = (date: Dayjs | string) => {
	const current = dayjs()
	const target = dayjs(date)

	if (current.diff(target, 'days') >= 3) {
		return dayjs(date).format('YYYY.MM.DD')
	}

	return target.fromNow(false)
}
