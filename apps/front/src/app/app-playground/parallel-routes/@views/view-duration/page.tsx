import { Boundary, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Boundary labels={['@views/view-duration/page.tsx']} size="small">
			<Prose title="View Duration" />
		</Boundary>
	)
}
