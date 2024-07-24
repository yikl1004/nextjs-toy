'use client'

import { useEffect, useRef } from 'react'

// https://github.com/streamich/react-use/blob/master/src/useInterval.ts
export const useInterval = (callback: () => void, delay?: number | null) => {
	const savedCallback = useRef<() => void>(() => {})

	useEffect(() => {
		savedCallback.current = callback
	})

	useEffect(() => {
		if (delay !== null) {
			const interval = setInterval(() => savedCallback.current(), delay || 0)
			return () => clearInterval(interval)
		}

		return undefined
	}, [delay])
}
