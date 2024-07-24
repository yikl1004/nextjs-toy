// eslint-disable-next-line @rushstack/no-new-null
export function isNil(value: unknown): value is null | undefined {
	return Object.is(value, null) || Object.is(typeof value, 'undefined')
}
