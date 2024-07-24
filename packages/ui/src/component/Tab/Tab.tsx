/* eslint-disable @rushstack/no-new-null */
'use client'

import { memo, useMemo } from 'react'
import styled from '@emotion/styled'
import { padding } from '@repo/utils/emotion'
import { demoColor, demoMediaQueries } from '@style/demo'
import type { Item } from '@component/Tab/TabGroup'

const TabStyled = styled('a')`
	border-radius: 0.5rem;
	${padding({ y: 1, x: 3 })}
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;

	background-color: ${demoColor.gray700};
	color: ${demoColor.gray100};

	/* @media hover */
	${demoMediaQueries.hover} {
		&:not(.active):hover {
			background-color: ${demoColor.gray500};
			color: ${demoColor.white};
		}
	}

	&.active {
		background-color: ${demoColor.vercel_blue};
		color: ${demoColor.white};
	}
`

interface TabProps {
	item: Item
	href: string
	/** React ElementType, @default: 'a' */
	as: React.ElementType
	segment?: string | null
}

export const Tab = memo(({ item, href, segment }: TabProps) => {
	// const detailSlug = condition(item.slug, `/${item.slug}`, '')
	// const categorySlug = condition(category, `/${category?.slug}`, '')
	// const href = condition(detailSlug, `${path}${categorySlug}${detailSlug}`, path)

	// const isActive =
	// 	// Example home pages e.g. `/layouts`
	// 	(!detailSlug && isNil(segment)) ||
	// 	Object.is(segment, item.segment) ||
	// 	// Nested pages e.g. `/layouts/electronics`
	// 	Object.is(segment, detailSlug.replace('/', ''))
	// const segment = useSelectedLayoutSegment()

	const active = useMemo(() => {
		const isHome = segment === null && item.segment === null
		const hasSegment = segment === item.slug
		return isHome || hasSegment
	}, [item.segment, item.slug, segment])

	return (
		<TabStyled href={href} className={active ? 'active' : ''}>
			{item.text}
		</TabStyled>
	)
})

Tab.displayName = 'Tab'
