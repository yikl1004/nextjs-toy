import { Boundary, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

export default async function Layout({ children }: { children: React.ReactNode }) {
	const items = (() => {
		return [
			{ text: 'Home' },
			{ text: 'Demogra phics', slug: 'demographics' },
			{ text: 'Subscr ibers', slug: 'subscribers' },
		]
	})()

	return (
		<Boundary labels={['parallel-routes/@audience/layout.tsx']} size="small">
			<Spacer vertical={8}>
				<SegmentDetect
					component={TabGroup}
					path="/app-playground/parallel-routes"
					items={items}
				/>
				{children}
			</Spacer>
		</Boundary>
	)
}
