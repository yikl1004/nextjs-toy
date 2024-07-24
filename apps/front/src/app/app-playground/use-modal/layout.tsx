import type { Metadata } from 'next'
import Link from 'next/link'
import { Box } from '@repo/ui'
import { Wrap } from '@page/app-playground/use-modal/Layout.styled'

export const metadata: Metadata = {
	title: 'Modal',
	description: 'Modal Test',
}

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode
	modal: React.ReactNode
}) {
	const items = Array(100)
		.fill('')
		.map((v, i) => ({ id: i, num: i + 1 }))

	const createPath = (part: string | number) => {
		return `/app-playground/use-modal/items/${part}`
	}

	return (
		<Box>
			<Box as="main">
				<Box>
					{items.map((item) => {
						return (
							<Wrap key={item.id}>
								<Link scroll={false} href={createPath(item.num)}>
									open {item.num} modal
								</Link>
							</Wrap>
						)
					})}
				</Box>
			</Box>
			<Box id="modal-children">{children}</Box>
			<Box id="modal-container">{modal}</Box>
		</Box>
	)
}
