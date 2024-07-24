export const roundTo = (num: number, decimal: number) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	return +`${Math.round(`${num}e+${decimal}`)}e-${decimal}`
}
