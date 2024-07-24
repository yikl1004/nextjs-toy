import { Boundary, Prose, Title } from '@repo/ui'

export default function Page() {
	return (
		<Boundary labels={['@views/page.tsx']} size="small">
			<Prose>
				<Title>Home</Title>
			</Prose>
		</Boundary>
	)
}
