import { Boundary, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Boundary labels={['@audience/demographics/page.tsx']} size="small">
			<Prose title="Demographics" />
		</Boundary>
	)
}
