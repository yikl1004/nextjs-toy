import Link from 'next/link'
import { ExternalLink, Spacer, Title, LinkBlockList, Alignment } from '@repo/ui'

const items = [
	{
		name: 'Updating searchParams',
		slug: '/app-playground/snippets/search-params',
		description: '`useRouter` 와 `<Link>`를 사용하여 searchParams 업데이트',
	},
]

export default function Page() {
	return (
		<Spacer vertical={6}>
			<Title top>Code Snippets</Title>
			<LinkBlockList as={Link} list={items} />
			<Alignment flex gap={2}>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/snippets">
					Code
				</ExternalLink>
			</Alignment>
		</Spacer>
	)
}
