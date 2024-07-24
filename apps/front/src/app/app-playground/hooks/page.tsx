import { Alignment, ExternalLink, Prose, Spacer } from '@repo/ui'

export default function Page() {
	return (
		<Spacer vertical={9} className="space-y-9">
			<Prose
				title="Client Component Hooks"
				paragraph={
					<>
						<li>
							Next.js provides a number of hooks for accessing routing information
							from client components.
						</li>
						<li>
							Try navigating each page and observing the output of each hook called
							from the current routes <code>layout.js</code> and <code>page.js</code>{' '}
							files.
						</li>
					</>
				}
			>
				<Alignment flex gap={2}>
					<ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#revalidating-data">
						Docs
					</ExternalLink>
					<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/hooks">
						Code
					</ExternalLink>
				</Alignment>
			</Prose>
		</Spacer>
	)
}
