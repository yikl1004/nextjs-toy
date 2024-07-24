'use client'

import { useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Tab } from '@repo/ui'
import Link from 'next/link'

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const RandomPostTabStyled = styled('div')<{ hasPost?: boolean }>`
	display: inline-flex;
	transition-property: opacity;
	transition-property: opacity;
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	opacity: ${({ hasPost }) => (hasPost ? 1 : 0)};
`

export function RandomPostTab({ path, segment }: { path: string; segment: string | null }) {
	const [post, setPost] = useState<null | { text: string; slug: string }>(null)

	const href = useMemo(() => {
		const detailSlug = post ? `/${post!.slug}` : ''
		const result = detailSlug ? `${path}${detailSlug}` : path

		return result
	}, [path, post])

	useEffect(() => {
		const randomId = String(randomNumber(3, 100))
		setPost({ text: `Post ${randomId} (On Demand)`, slug: randomId })
	}, [])

	return (
		<RandomPostTabStyled hasPost={!!post}>
			{post ? (
				<Tab
					as={Link}
					href={href}
					item={{ text: post.text, slug: post.slug }}
					segment={segment}
				/>
			) : null}
		</RandomPostTabStyled>
	)
}
