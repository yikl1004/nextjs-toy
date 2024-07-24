import { categoriesPrefetchQuery } from '@services/demo/categories'
import { Alignment, Box, ClickCounter, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Loading'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}
export default async function Layout({ children }: { children: React.ReactNode }) {
	const { data: categories } = await categoriesPrefetchQuery({})

	const items = (() => {
		return [{ text: 'Home' }].concat(
			(categories || []).map((x) => ({
				text: x.name,
				slug: x.slug,
			})),
		)
	})()

	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<SegmentDetect component={TabGroup} path="/app-playground/loading" items={items} />
				<Box alignSelf="flex-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
