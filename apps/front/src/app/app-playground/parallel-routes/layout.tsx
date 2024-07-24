import { Spacer } from '@repo/ui'

const title = 'Parallel Routes'

export const metadata = {
	title,
	openGraph: {
		title,
		images: [`/api/og?title=${title}`],
	},
}

export default function Layout({
	children,
	audience,
	views,
}: {
	children: React.ReactNode
	audience: React.ReactNode
	views: React.ReactNode
}) {
	return (
		<Spacer vertical={6}>
			<Spacer
				vertical={6}
				lg={{
					grid: true,
					cols: 2,
					gap: 6,
					spaceY: 0,
				}}
			>
				{children}
				<Spacer vertical={6}>
					{audience}
					{views}
				</Spacer>
			</Spacer>
		</Spacer>
	)
}
