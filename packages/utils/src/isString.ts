export function isString(value: unknown): value is string {
	return Object.is(typeof value, 'string')
}
