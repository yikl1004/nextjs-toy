export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
	return Object.is(typeof value, 'function')
}
