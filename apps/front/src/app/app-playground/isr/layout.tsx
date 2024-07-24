import type { Metadata } from 'next'
import { TabGroup, Spacer, Box } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Incremental Static Regeneration (ISR)'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
} satisfies Metadata

type LayoutProps = React.PropsWithChildren

export default async function Layout({ children }: LayoutProps) {
	const ids = [{ id: '1' }, { id: '2' }, { id: '3' }]
	const items = [{ text: 'Home' }, ...ids.map((x) => ({ text: `Post ${x.id}`, slug: x.id }))]

	return (
		<Spacer vertical={9}>
			<SegmentDetect component={TabGroup} path="/app-playground/isr" items={items} />
			<Box>{children}</Box>
		</Spacer>
	)
}
