import { NotFoundStyled, Boundary, Typography } from '@repo/ui'

export default function NotFound() {
	return (
		<Boundary labels={['./[categorySlug]/[subCategorySlug]/not-found.tsx']} color="pink">
			<NotFoundStyled vertical={3}>
				<Typography variant="h2">Sub Category Not Found</Typography>
				<p>Could not find requested resource</p>
			</NotFoundStyled>
		</Boundary>
	)
}
