'use client'

import dynamic from 'next/dynamic'

const LineChart = dynamic(() => import('./LineChart').then((module) => module.LineChart), {
	ssr: false,
	loading: () => <>...loading</>,
})

export default LineChart
