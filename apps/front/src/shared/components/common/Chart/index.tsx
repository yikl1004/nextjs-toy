'use client'

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('./Chart').then((module) => module.Chart), {
	ssr: false,
	loading: () => <>...loading</>,
})

export default Chart
