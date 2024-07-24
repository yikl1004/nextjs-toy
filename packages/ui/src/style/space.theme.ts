export const spacer = (num: number, unit?: 'px' | 'em' | 'rem') => {
	const result = num * 0.25
	if (unit) {
		return `${result}${unit}`
	}
	return `${result}rem`
}
export const space = Array.from({ length: 50 }, (value, index) => `${index * 0.25}rem`)
