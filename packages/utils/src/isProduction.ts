export function isProduction() {
	return Object.is(process.env.NODE_ENV, 'production')
}
