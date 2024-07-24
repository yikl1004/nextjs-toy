import { categoriesPrefetchQuery } from '@services/demo/categories'
import { Alignment, Box, ClickCounter, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

const title = 'Not Found'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

type LayoutProps = React.PropsWithChildren

export default async function Layout({ children }: LayoutProps) {
	const { data: categories } = await categoriesPrefetchQuery({})

	const items = [{ text: 'Home' }].concat(
		(categories || [])
			.map((x) => ({
				text: x.name,
				slug: x.slug,
			}))
			.concat({ text: 'Category That Does Not Exist', slug: 'does-not-exist' }),
	)

	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<SegmentDetect
					component={TabGroup}
					path="/app-playground/not-found"
					items={items}
				/>
				<Box alignSelf="flex-start">
					<ClickCounter />
				</Box>
			</Alignment>
			<Box>{children}</Box>
		</Spacer>
	)
}
