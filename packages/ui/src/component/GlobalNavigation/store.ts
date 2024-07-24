'use client'

import { useCallback, useSyncExternalStore } from 'react'

type Listener = () => void
type Updater<S> = (state: S) => S
interface Store<T> {
	getState: () => T
	setState: (fn: Updater<T>) => void
	subscribe: (listener: Listener) => () => boolean
}

function createStore<T>(initialState: T): Store<T> {
	let state = initialState
	const getState = () => state
	const listeners = new Set<Listener>()
	const setState = (fn: Updater<T>) => {
		state = fn(state)
		listeners.forEach((l) => l())
	}
	const subscribe = (listener: Listener) => {
		listeners.add(listener)
		return () => listeners.delete(listener)
	}

	return { getState, setState, subscribe }
}

function useStore<T>(store: Store<T>, selector: (state: T) => T) {
	return useSyncExternalStore(
		store.subscribe,
		useCallback(() => selector(store.getState()), [selector, store]),
		() => store.getState(),
	)
}

const gnbStore = createStore({ toggle: false })

export const useGnbControll = () => {
	const state = useStore(
		gnbStore,
		useCallback((prevState) => {
			prevState.toggle = !prevState.toggle
			return prevState
		}, []),
	)

	return [state, gnbStore.setState] as const
}
