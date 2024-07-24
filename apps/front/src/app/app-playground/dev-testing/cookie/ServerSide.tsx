import { cookies } from 'next/headers'
import { Box, Title } from '@repo/ui'

export const ServerSide = () => {
	const cookie = cookies().getAll()

	return (
		<Box>
			<Title>To Server-Side</Title>
			{JSON.stringify(cookie)}
		</Box>
	)
}
