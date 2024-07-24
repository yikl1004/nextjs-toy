export function isUndefined(value: unknown): value is undefined {
	return Object.is(typeof value, 'undefined')
}
