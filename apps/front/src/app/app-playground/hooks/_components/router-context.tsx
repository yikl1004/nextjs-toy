'use client'

import {
	useParams,
	usePathname,
	useSearchParams,
	useSelectedLayoutSegment,
	useSelectedLayoutSegments,
} from 'next/navigation'
import { Boundary, CodePreview } from '@repo/ui'

export function HooksClient() {
	const pathname = usePathname()
	const params = useParams()
	const selectedLayoutSegment = useSelectedLayoutSegment()
	const selectedLayoutSegments = useSelectedLayoutSegments()
	const searchParams = useSearchParams()

	return (
		<Boundary labels={['Client Component Hooks']} size="small">
			<CodePreview>
				{JSON.stringify(
					{
						usePathname: pathname,
						useParams: params,
						useSearchParams: searchParams
							? Object.fromEntries(searchParams.entries())
							: {},
						useSelectedLayoutSegment: selectedLayoutSegment,
						useSelectedLayoutSegments: selectedLayoutSegments,
					},
					null,
					2,
				)}
			</CodePreview>
		</Boundary>
	)
}
