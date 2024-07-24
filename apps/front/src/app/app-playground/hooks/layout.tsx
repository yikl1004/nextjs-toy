import { ClickCounter, Spacer, Box, Alignment, TabGroup } from '@repo/ui'
import { LayoutHooks } from '@page/app-playground/hooks/_components/router-context-layout'
import { categoriesPrefetchQuery } from '@services/demo/categories'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Hooks'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	const { data: categories } = await categoriesPrefetchQuery({})
	const items = [{ text: 'Home' }].concat(
		(categories || []).map((x) => ({
			text: x.name,
			slug: x.slug,
		})),
	)

	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<SegmentDetect component={TabGroup} path="/app-playground/hooks" items={items} />
				<Box alignSelf="flex-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<LayoutHooks />
			<Box>{children}</Box>
		</Spacer>
	)
}
