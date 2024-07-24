import { Alignment, Boundary, Box, Button, Spacer } from '@repo/ui'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Boundary labels={['checkout layout']} color="blue" animateRerendering={false}>
			<Spacer vertical={9}>
				<Alignment flex alignItems="center" justifyContent="space-between">
					<Alignment flex alignItems="center" gap={4}>
						<Button kind="link" href="/app-playground/route-groups">
							Back
						</Button>
					</Alignment>
				</Alignment>
				<Box>{children}</Box>
			</Spacer>
		</Boundary>
	)
}
