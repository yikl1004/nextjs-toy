/* eslint-disable @rushstack/no-new-null */
'use client'

import { condition } from '@repo/utils'
import { useMemo } from 'react'
import { Alignment } from '@component/Alignment'
import { Tab } from '@component/Tab/Tab'

export interface Item {
	text: string
	slug?: string
	segment?: string | null
	parallelRoutesKey?: string
}

export interface Category {
	name: string
	slug: string
	count: number
	parent: string | null
	segment?: string | null
}

interface TabGroupProps {
	path: string
	items: (Item & { href?: string })[]
	category?: Category
	children?: React.ReactNode
	TabComponent?: React.ElementType
	segment: string | null
}

export function TabGroup({
	path,
	items,
	category,
	children,
	TabComponent,
	segment,
}: TabGroupProps) {
	const hrefList = useMemo(() => {
		return items.concat().reduce((result, item) => {
			const detailSlug = condition(item.slug, `/${item.slug}`, '')
			const categorySlug = condition(category, `/${category?.slug}`, '')
			const href = condition(detailSlug, `${path}${categorySlug}${detailSlug}`, path)

			result.push(href)

			return result
		}, [] as string[])
	}, [category, items, path])

	return (
		<Alignment flex flexWrap alignItems="center" gap={2}>
			{items.map((item, index) => (
				<Tab
					as={TabComponent || 'a'}
					href={hrefList[index] as string}
					key={`${path}${item.slug}`}
					item={item}
					segment={segment}
				/>
			))}
			{children}
		</Alignment>
	)
}
