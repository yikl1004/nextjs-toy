/* eslint-disable @rushstack/no-new-null */

export function omit<T extends object, K extends keyof T>(
	object: T | null | undefined,
	paths: K[],
): Omit<T, K> {
	if (object === null || typeof object === 'undefined') {
		return {} as Omit<T, K>
	}

	const omitted = Object.entries(object).reduce(
		(obj, [key, value]) => {
			if (!paths.includes(key as K)) {
				Object.defineProperty(obj, key, { value })
			}
			return obj
		},
		{} as Omit<T, K>,
	)

	return omitted
}
