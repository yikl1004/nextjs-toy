import LineChart from '@components/common/LineChart'
import DonutChart from '@components/common/DonutChart'
import { Spacer, Title } from '@repo/ui'
import { DonutChart2 } from '@components/common/DonutChart2'

export default function Page() {
	const lineChartData = [80, 75, 62, 85, 55, 90, 78, 20, 74, 66]
	const donutChartData = [
		// count 수치가 답합해서 100이 되는걸 가정한 수치만 받고 있음
		{ name: 'item1', count: 120, color: 'rgb(119, 52, 226)' },
		{ name: 'item2', count: 19, color: 'rgb(36, 116, 226)' },
		{ name: 'item3', count: 25, color: 'rgb(23, 227, 212)' },
		{ name: 'item4', count: 50, color: 'rgb(255, 126, 31)' },
	]
	const donutChartData2 = [
		{ category: 'life', count: 419, color: 'rgb(119, 52, 226)' },
		{ category: 'health', count: 260, color: 'rgb(36, 116, 226)' },
		{ category: 'shopping', count: 50, color: 'rgb(23, 227, 212)' },
		{ category: 'traffic', count: 234, color: 'rgb(255, 126, 31)' },
		{ category: 'food', count: 200, color: 'rgb(7, 63, 83)' },
		{ category: 'culture', count: 190, color: 'rgb(156, 195, 38)' },
		{ category: 'etc', count: 100, color: 'rgb(255, 31, 218)' },
	]

	const donutChartData3 = [
		{ category: 'a', count: 419, color: 'rgb(119, 52, 226)' },
		{ category: 'b', count: 260, color: 'rgb(36, 116, 226)' },
		{ category: 'c', count: 50, color: 'rgb(23, 227, 212)' },
		{ category: 'd', count: 234, color: 'rgb(255, 126, 31)' },
		{ category: 'e', count: 200, color: 'rgb(7, 63, 83)' },
	]

	return (
		<Spacer vertical={10}>
			<Spacer vertical={4}>
				<Title>LineChart</Title>
				<LineChart data={lineChartData} />
			</Spacer>
			<Spacer vertical={4}>
				<Title>DonutChart</Title>
				<DonutChart data={donutChartData} />
			</Spacer>
			<Spacer vertical={4}>
				<Title>DonutChart - SVG Custom</Title>
				<DonutChart2
					size={180}
					data={donutChartData2}
					thickness={45}
					spacing={{ stroke: 4 }}
				/>
			</Spacer>

			<Spacer vertical={4}>
				<Title>DonutChart - SVG Custom</Title>
				<DonutChart2
					size={200}
					data={donutChartData3}
					thickness={60}
					spacing={{ stroke: 4 }}
				/>
			</Spacer>
		</Spacer>
	)
}
