import { Boundary, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Boundary labels={['@audience/subscribers/page.tsx']} size="small">
			<Prose title="Subscribers" />
		</Boundary>
	)
}
