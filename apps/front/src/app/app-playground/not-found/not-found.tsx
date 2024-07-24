import { NotFoundStyled, Boundary, Typography } from '@repo/ui'

export default function NotFound() {
	return (
		<Boundary labels={['./not-found.tsx']} color="pink">
			<NotFoundStyled vertical={4}>
				<Typography variant="h2">Not Found</Typography>
				<p>Could not find requested resource</p>
			</NotFoundStyled>
		</Boundary>
	)
}
