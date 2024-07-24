'use client'

import { getCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

export const useCookies = (key: string, initialValue?: Record<string, string>) => {
	const [state, setState] = useState(() => {
		return getCookie(key) ?? initialValue ?? ''
	})

	useEffect(() => {
		setCookie(key, state)
	}, [key, state])

	return [state, setState]
}
