import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Incremental Static Regeneration"
			paragraph={
				<>
					<li>In this example, three posts fetch data using granular ISR.</li>
					<li>Caches responses are fresh for 10 seconds.</li>
					<li>
						Try navigating to each post and noting the timestamp of when the page was
						rendered. Refresh the page after 10 seconds to trigger a revalidation for
						the next request. Refresh again to see the revalidated page.
					</li>
					<li>Note that the fetch cache can be persisted across builds.</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#revalidating-data">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/isr">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
