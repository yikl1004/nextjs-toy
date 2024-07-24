import { ExternalLink, Prose, Alignment, Button } from '@repo/ui'

export default function Page() {
	const title = 'Error Handling'

	return (
		<Prose
			title={title}
			paragraph={
				<>
					<li>
						<code>error.js</code> defines the error boundary for a route segment and the
						children below it. It can be used to show specific error information, and
						functionality to attempt to recover from the error.
					</li>
					<li>
						Trying navigation pages and triggering an error inside nested layouts.
						Notice how the error is isolated to that segment, while the rest of the app
						remains interactive.
					</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<Button kind="buggy">Trigger Error</Button>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/error-handling">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/error-handling">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
