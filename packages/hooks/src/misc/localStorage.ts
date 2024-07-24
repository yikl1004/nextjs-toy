/**
 * @description LocalStorage에서 키에 해당하는 값을 가져옵니다.
 * @param {string} key
 * @returns {string | null}
 */
export const getLocalStorageItem = (key: string) => {
	return window.localStorage.getItem(key)
}

/**
 * @description server-side에서는 LocalStorage를 사용할 수 없으므로 빈 문자열을 반환합니다.
 * @returns {string}
 */
export const getLocalStorageServerSnapshot = () => {
	// throw Error('useLocalStorage is a client-only hook')
	return ''
}

type StringOrNil = string | null | undefined

function dispatchStorageEvent(key: StringOrNil, newValue: StringOrNil) {
	window.dispatchEvent(new StorageEvent('storage', { key, newValue }))
}

export const removeLocalStorageItem = (key: string) => {
	window.localStorage.removeItem(key)
	dispatchStorageEvent(key, null)
}

export const setLocalStorageItem = (key: string, value: unknown) => {
	const stringifiedValue = JSON.stringify(value)
	window.localStorage.setItem(key, stringifiedValue)
	dispatchStorageEvent(key, stringifiedValue)
}
