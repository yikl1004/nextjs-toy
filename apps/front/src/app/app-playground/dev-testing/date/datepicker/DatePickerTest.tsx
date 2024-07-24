'use client'

import { useState } from 'react'
import DatePicker from '@components/common/DatePicker'
import { dayjs, isClient } from '@repo/utils'
import { request } from '@services/api'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/restapi/v0/get/contents/program/exist-article-dates': ExistArticleDatesResponse
	}
}

type ExistArticleDatesResponse = CommonResponse<string[]>

async function getDates({ year, month }: { year: string; month: string }) {
	// client에서 실행 된다고 가정 universal로 동작하게 하려면 server/client 분기 필요
	const searchParams = new URLSearchParams(window.location.search)
	const { data } = await request.get('/restapi/v0/get/contents/program/exist-article-dates', {
		params: {
			programIdx: searchParams.get('programIdx') || '',
			searchYearMonth: `${year}${month}`,
		},
	})

	return data
}

export const DatePickerTest = () => {
	const currentDate = isClient() ? dayjs().toDate() : null
	const [value, setValue] = useState<null | string>(null)

	return (
		<>
			<p>{value}</p>
			<DatePicker
				selected={currentDate}
				onChange={(date) => setValue(date)}
				getExcludeDatesByMonth={getDates}
			/>
		</>
	)
}
