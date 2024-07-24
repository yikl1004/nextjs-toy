import { roundTo } from '@components/common/DonutChart/roundTo'
import { type DonutChartStateContextProps, DonutChartStateProvider } from './context'

interface DonutChartProviderProps
	extends React.StrictPropsWithChildren,
		DonutChartStateContextProps {}

export const DonutChartProvider = ({
	children,
	data,
	size,
	radius,
	circumference,
}: DonutChartProviderProps) => {
	// 전체 count를 다 합한 값
	const totalCount = data.reduce((accumulate, currentItem) => accumulate + currentItem.count, 0)

	// count는 단순 수치이기 때문에 전체 비율로 계산하여 percentage를 추가한다.
	const computedData = data.map((currentItem) => {
		const clonedCurrentItem = currentItem
		const ratio = (clonedCurrentItem.count / totalCount) * 100
		clonedCurrentItem.percentage = roundTo(ratio, 2)

		return clonedCurrentItem
	})

	return (
		<DonutChartStateProvider value={{ data: computedData, size, radius, circumference }}>
			{children}
		</DonutChartStateProvider>
	)
}
