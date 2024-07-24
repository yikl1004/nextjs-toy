import { isUndefined } from './isUndefined'

export function isServer() {
	return typeof window === 'undefined' && !isUndefined(global)
}
