'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'

export const BODY_SCROLL_LOCK_IGNORE = 'data-body-scroll-lock-ignore'

/**
 * @name useAllowTouchMove
 * @note iOS에서 body의 스크롤 차단시 모달에서의 touch move가 잘 인식 되지 않는 문제가 있음
 */
function useAllowTouchMove<T extends HTMLElement | null>() {
	const [overflow, setOverflow] = useState(false)

	const measuredRef = useCallback((node: T) => {
		if (node !== null) {
			if (
				node.getBoundingClientRect().height < node.scrollHeight ||
				node.getBoundingClientRect().width < node.scrollWidth
			) {
				setOverflow(true)
			} else {
				setOverflow(false)
			}
		}
	}, [])

	const allowTouchMove = useMemo(() => {
		if (overflow) {
			return { [BODY_SCROLL_LOCK_IGNORE]: 'true' }
		}
		return {}
	}, [overflow])

	useEffect(() => {
		const body = document.querySelector('body')

		if (body) {
			disableBodyScroll(body, {
				allowTouchMove: (el) => {
					while (el && el !== document.body) {
						if (el.getAttribute(BODY_SCROLL_LOCK_IGNORE) !== null) {
							return true
						}

						if (el.parentElement) {
							el = el.parentElement
						}
					}

					return false
				},
			})
		}
		return () => clearAllBodyScrollLocks()
	}, [])

	return [measuredRef, allowTouchMove]
}

export default useAllowTouchMove
