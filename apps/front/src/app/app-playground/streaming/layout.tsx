import { Alignment, Box, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Streaming'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	const items = [
		{ text: 'Home' },
		{ text: 'Edge Runtime', slug: 'edge/product/1', segment: 'edge' },
		{ text: 'Node Runtime', slug: 'node/product/1', segment: 'node' },
	]

	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<SegmentDetect
					component={TabGroup}
					path="/app-playground/streaming"
					items={items}
				/>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
