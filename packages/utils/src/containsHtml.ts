export const containsHtml = (str: string): boolean => {
	const htmlTagPattern: RegExp = /<[^>]*>/

	return htmlTagPattern.test(str)
}
