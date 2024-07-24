'use client'

import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { Title, Box } from '@repo/ui'

interface ClientSideProps {
	initialCookies?: RequestCookie | RequestCookie[]
}

export const ClientSide = ({ initialCookies }: ClientSideProps) => {
	return (
		<Box>
			<Title>To Client-Side</Title>
			{JSON.stringify(initialCookies)}
		</Box>
	)
}
