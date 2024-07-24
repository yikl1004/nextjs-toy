'use client'

import styled from '@emotion/styled'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Box, Typography } from '@repo/ui'
import { Image } from '@components/common/Image'

const ItemStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 20;

	& > div {
		border: 1px solid #ccc;
		text-align: center;

		img {
			width: 180px;
			height: 180px;
		}
	}
`

interface Posts {
	id: string
	title: string
}

async function getUsers() {
	const response = new Promise((resolve) => {
		setTimeout(resolve, 5000)
	}).then(async () =>
		fetch('https://jsonplaceholder.typicode.com/posts').then(
			(res) => res.json() as Promise<Posts[]>,
		),
	)
	return response
}

export function ListUsers() {
	const [count, setCount] = useState(0)
	const { data } = useSuspenseQuery<Posts[], Error>({
		queryKey: ['@users/list'],
		queryFn: () => getUsers(),
		staleTime: 5 * 1000,
	})

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((prev) => prev + 1)
		}, 100)

		return () => {
			clearInterval(intervalId)
		}
	})

	return (
		<>
			<p>{count}</p>
			<ItemStyled>
				{data.map(({ id, title }) => (
					<Box key={id}>
						<Image
							src={{
								desktop: `https://robohash.org/${id}?set=set2&size=180x180`,
								mobile: `https://robohash.org/${id}?set=set2&size=180x180`,
								tablet: `https://robohash.org/${id}?set=set2&size=180x180`,
							}}
							alt={title}
							width={180}
						/>
						<Typography variant="h3">{title}</Typography>
					</Box>
				))}
			</ItemStyled>
		</>
	)
}
