import { Prose, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const items = [
		{ text: 'Highcharts', slug: 'highcharts' },
		{ text: 'Custom(CSS)', slug: 'custom-svg' },
	]

	return (
		<Spacer vertical={9}>
			<SegmentDetect
				component={TabGroup}
				path="/app-playground/dev-testing/chart"
				items={items}
			/>
			<Prose title="Charts">
				<Spacer vertical={10}>{children}</Spacer>
			</Prose>
		</Spacer>
	)
}
