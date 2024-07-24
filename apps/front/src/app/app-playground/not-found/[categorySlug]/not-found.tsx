import { Boundary, NotFoundStyled, Typography } from '@repo/ui'

export default function NotFound() {
	return (
		<Boundary labels={['./[categorySlug]/not-found.tsx']} color="pink">
			<NotFoundStyled vertical={3}>
				<Typography variant="h2">Category Not Found</Typography>
				<p>Could not find requested resource</p>
			</NotFoundStyled>
		</Boundary>
	)
}
