import { Path } from './Path'
import { useDonutChartContext } from './context/useDonutChartContext'

export const Circle = () => {
	const { data, maskId } = useDonutChartContext()

	return (
		<g mask={`url(#${maskId})`}>
			<title>data list</title>
			{data.map(({ category }, index) => (
				<Path key={category} index={index} />
			))}
		</g>
	)
}
