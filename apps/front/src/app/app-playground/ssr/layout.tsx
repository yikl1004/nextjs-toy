import { Box, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Dynamic Data'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}
export default async function Layout({ children }: { children: React.ReactNode }) {
	const ids = [{ id: '1' }, { id: '2' }, { id: '3' }]

	const items = [
		{
			text: 'Home',
		},
		...ids.map((x) => ({
			text: `Post ${x.id}`,
			slug: x.id,
		})),
	]

	return (
		<Spacer vertical={9}>
			<SegmentDetect component={TabGroup} path="/app-playground/ssr" items={items} />
			<Box>{children}</Box>
		</Spacer>
	)
}
