'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const NavigationEvent = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`
		console.log(url)
	}, [pathname, searchParams])

	return null
}
