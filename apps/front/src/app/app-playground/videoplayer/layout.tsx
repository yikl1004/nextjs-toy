import { Prose, Spacer } from '@repo/ui'

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<Prose title="Video Player">
			<Spacer vertical={10}>{children}</Spacer>
		</Prose>
	)
}
