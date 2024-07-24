import { Boundary, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Boundary labels={['@views/impressions/page.tsx']} size="small">
			<Prose title="Impressions" />
		</Boundary>
	)
}
