import { Boundary, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

export default async function Layout({ children }: { children: React.ReactNode }) {
	const items = [
		{ text: 'Home' },
		{ text: 'Impressions', slug: 'impressions' },
		{ text: 'View Duration', slug: 'view-duration' },
	]
	return (
		<Boundary labels={['parallel-routes/@views/layout.tsx']} size="small">
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
