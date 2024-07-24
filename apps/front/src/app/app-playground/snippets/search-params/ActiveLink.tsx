'use client'

import { usePathname } from 'next/navigation'
import { SelectableButton } from '@repo/ui'
import Link from 'next/link'

type ActiveLinkProps = {
	isActive: boolean
	searchParams: string
	children: React.ReactNode
}

export const ActiveLink = ({ isActive, searchParams, children }: ActiveLinkProps) => {
	const pathname = usePathname()

	return (
		<SelectableButton as={Link} href={`${pathname}?${searchParams}`} active={isActive}>
			{children}
		</SelectableButton>
	)
}
