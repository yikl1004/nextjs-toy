'use client'

import dynamic from 'next/dynamic'

const DatePicker = dynamic(
	() => import('@components/common/DatePicker/DatePicker').then((module) => module.DatePicker),
	{
		ssr: false,
		loading: () => null,
	},
)

export default DatePicker
