'use client'

import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import { HighchartsReact } from 'highcharts-react-official'

if (typeof Highcharts === 'object') {
	HighchartsExporting(Highcharts)
}

export const Chart = () => {
	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={{
				credits: {
					enabled: false,
				},
				title: { text: null },
				chart: { type: 'pie', backgroundColor: 'rgba(0, 0, 0, 0)' },
				navigation: {
					buttonOptions: {
						enabled: false,
					},
				},
				// allowPointSelect: true,
				// 데이터가 처음엔 비어았다.
				series: [
					{
						name: 'Percentage',
						colorByPoint: true,
						data: [
							{
								name: 'Water',
								y: 55.02,
							},
							{
								name: 'Fat',
								y: 26.71,
							},
							{
								name: 'Carbohydrates',
								y: 1.09,
							},
							{
								name: 'Protein',
								y: 15.5,
							},
							{
								name: 'Ash',
								y: 1.68,
							},
						],
					},
				],
				plotOptions: {
					series: {
						animation: false,
					},
					pie: {
						dataLabels: {
							enabled: true,
							distance: -50,
						},
					},
				},
			}}
		/>
	)
}
