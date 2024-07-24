import Link from 'next/link'
import { ExternalLink, Prose, Alignment } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Not Found"
			paragraph={
				<>
					<li>
						<code>
							<Link href="https://nextjs.org/docs/app/api-reference/file-conventions/not-found">
								not-found.js
							</Link>
						</code>{' '}
						file is used to render UI when the{' '}
						<code>
							<Link href="https://nextjs.org/docs/app/api-reference/functions/not-found">
								notFound()
							</Link>
						</code>{' '}
						function is thrown within a route segment.
					</li>
					<li>
						In this example, when fetching the data we return <code>notFound()</code>{' '}
						for <Link href="/not-found/does-not-exist">Categories</Link> and{' '}
						<Link href="/not-found/electronics/does-not-exist">Sub Categories</Link>{' '}
						that do not exist. This renders the closest appropriate
						<code>not-found.js</code>.
					</li>
					<li>
						<em>
							Note: <code>not-found.js</code> currently only renders when triggered by
							the <code>notFound()</code> function. We&apos;re working on support for
							catching unmatched routes (404).
						</em>
					</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/api-reference/file-conventions/not-found">
					Docs
				</ExternalLink>

				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/not-found">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
