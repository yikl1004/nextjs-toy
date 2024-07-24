'use client'

import { useCallback, useEffect, useSyncExternalStore } from 'react'
import { isFunction, isNil, isNull, isUndefined, logger } from '@repo/utils'
import {
	getLocalStorageItem,
	getLocalStorageServerSnapshot,
	removeLocalStorageItem,
	setLocalStorageItem,
} from './misc/localStorage'
import { useLocalStorageSubscribe } from './useLocalStorageSubscribe'

export function useLocalStorage<T>(
	key: string,
	initialValue?: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const getSnapshot = () => getLocalStorageItem(key)

	const store = useSyncExternalStore(
		useLocalStorageSubscribe,
		getSnapshot,
		getLocalStorageServerSnapshot,
	)

	const setState = useCallback(
		(v: ((json: unknown) => unknown) | unknown) => {
			try {
				const nextState = isFunction(v) ? v(JSON.parse(store || '')) : v

				if (isNil(nextState)) {
					removeLocalStorageItem(key)
				} else {
					setLocalStorageItem(key, nextState)
				}
			} catch (error) {
				logger.warn(error)
			}
		},
		[key, store],
	)

	useEffect(() => {
		if (isNull(getLocalStorageItem(key)) && isUndefined(initialValue)) {
			setLocalStorageItem(key, initialValue)
		}
	}, [key, initialValue])

	return [store ? JSON.parse(store) : initialValue, setState]
}
