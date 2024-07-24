import { Boundary, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Boundary labels={['@audience/page.tsx']} size="small">
			<Prose title="Home" />
		</Boundary>
	)
}
