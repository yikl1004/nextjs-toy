import { Spacer, Box, TabGroup } from '@repo/ui'
import { RandomPostTab } from './RandomPostTab'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Static Data'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default function Layout({ children }: { children: React.ReactNode }) {
	const items = [{ text: 'Home' }, { text: 'Post 1', slug: '1' }, { text: 'Post 2', slug: '2' }]

	return (
		<Spacer vertical={9}>
			<SegmentDetect component={TabGroup} path="/app-playground/ssg" items={items} />
			<SegmentDetect component={RandomPostTab} path="/app-playground/ssg" />
			{/* <Alignment flex flexWrap alignItems="center" gap={2}>
				<Tab path="/app-playground/ssg" item={{ text: 'Home' }} />
				<Tab path="/app-playground/ssg" item={{ text: 'Post 1', slug: '1' }} />
				<Tab path="/app-playground/ssg" item={{ text: 'Post 2', slug: '2' }} />
			</Alignment> */}
			<Box>{children}</Box>
		</Spacer>
	)
}
