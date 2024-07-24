/* eslint-disable @rushstack/no-new-null */
'use client'

import { useGnbControll } from '@component/GlobalNavigation/store'
import { NavItemStyled } from '@component/GlobalNavigation/styled'
import { Item } from '@component/GlobalNavigation/types'

interface NavItemProps {
	item: Item
	segment: string | null
}

export const NavItem = ({ item, segment }: NavItemProps) => {
	const isActive = Object.is(item.slug, segment)
	const [, setGnbState] = useGnbControll()

	const close = () => {
		setGnbState(() => ({ toggle: false }))
	}

	return (
		<NavItemStyled
			onClick={close}
			href={`/app-playground/${item.slug}`}
			className={isActive ? 'active' : ''}
		>
			{item.name}
		</NavItemStyled>
	)
}
