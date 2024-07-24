import { Suspense } from 'react'
import { Alignment, Box, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

type LayoutProps = React.StrictPropsWithChildren

export default function Layout({ children }: LayoutProps) {
	const items = [
		{ text: 'Fetch', slug: '/fetch' },
		{ text: 'Cookie', slug: '/cookie' },
	]

	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<Suspense>
					<SegmentDetect
						component={TabGroup}
						path="/app-playground/dev-testing"
						items={items}
					/>
				</Suspense>
				<Box alignSelf="flex-start" />
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
