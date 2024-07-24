'use client'

import dynamic from 'next/dynamic'

const DonutChart = dynamic(() => import('./DonutChart').then((module) => module.DonutChart), {
	ssr: false,
	loading: () => <>...loading</>,
})

export default DonutChart
