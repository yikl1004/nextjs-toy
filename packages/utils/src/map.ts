export function map<T extends Record<string, string | number | undefined>>(
	obj: T,
	callback: (key: keyof T, value: T[keyof T]) => void,
) {
	Object.entries(obj).forEach(([key, value]) => {
		callback(key, value as T[keyof T])
	})
}
