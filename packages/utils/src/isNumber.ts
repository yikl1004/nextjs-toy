export function isNumber(value: unknown): value is number {
	return Object.is(typeof value, 'number')
}
