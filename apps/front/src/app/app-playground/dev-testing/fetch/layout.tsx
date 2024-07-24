import { Boundary, Box, Spacer } from '@repo/ui'

type LayoutProps = React.StrictPropsWithChildren

export default function Layout({ children }: LayoutProps) {
	return (
		<Boundary labels={['Layout [Server Component]']} animateRerendering={false}>
			<Spacer vertical={9}>
				<Box>{children}</Box>
			</Spacer>
		</Boundary>
	)
}
