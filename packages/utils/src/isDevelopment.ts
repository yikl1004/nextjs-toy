export function isDevelopment() {
	return Object.is(process.env.NODE_ENV, 'development')
}
