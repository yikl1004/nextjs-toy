/**
 *
 * @param {number} time
 * @returns {Promise<void>}
 */
export const delay = <T>(time: number, fn: () => T) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fn())
		}, time)
	})
}
