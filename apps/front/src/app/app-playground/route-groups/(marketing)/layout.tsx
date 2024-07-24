import { categoriesPrefetchQuery } from '@services/demo/categories'
import { Alignment, Boundary, Box, ClickCounter, Spacer, TabGroup } from '@repo/ui'
import { SegmentDetect } from 'src/components/SegmentDetect'

export default async function Layout({ children }: { children: React.ReactNode }) {
	const { data: categories } = await categoriesPrefetchQuery({})

	const items = [
		{
			text: 'Home',
		},
		...(categories || []).map((x) => ({
			text: x.name,
			slug: x.slug,
		})),
		{ text: 'Checkout', slug: 'checkout' },
		{ text: 'Blog', slug: 'blog' },
	]

	return (
		<Boundary labels={['marketing layout']} color="violet" animateRerendering={false}>
			<Spacer vertical={9}>
				<Alignment flex justifyContent="space-between">
					<SegmentDetect
						component={TabGroup}
						path="/app-playground/route-groups"
						items={items}
					/>
					<Box alignSelf="flex-start">
						<ClickCounter />
					</Box>
				</Alignment>
				<Box>{children}</Box>
			</Spacer>
		</Boundary>
	)
}
