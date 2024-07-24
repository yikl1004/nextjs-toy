import { Box, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Styling'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	const items = [{ text: 'Home' }, { text: 'Styled Components', slug: 'styled-components' }]

	return (
		<Spacer vertical={9}>
			<SegmentDetect component={TabGroup} path="/app-playground/styling" items={items} />
			<Box>{children}</Box>
		</Spacer>
	)
}
