// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEmpty(value: any) {
	return (
		[Object, Array].includes((value || {}).constructor) && !Object.entries(value || {}).length
	)
}
