'use client'

export const useLocalStorageSubscribe = (callback: EventListener): (() => void) => {
	window.addEventListener('storage', callback)
	return () => window.removeEventListener('storage', callback)
}
