export function isObject(value: unknown): value is object {
	const type = typeof value
	// eslint-disable-next-line eqeqeq
	return value != null && (type === 'object' || type === 'function')
}
