/**
 * Helpers.
 */

const s = 1000
const m = s * 60
const h = m * 60
const d = h * 24
const w = d * 7
const y = d * 365.25

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(value: string): number | undefined {
	const str = String(value)
	if (str.length > 100) {
		return undefined
	}
	const match =
		/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
			str,
		)
	if (!match) {
		return undefined
	}

	const n = parseFloat(match[1] as string)
	const type = (match[2] || 'ms').toLowerCase()

	const timeUnits = {
		year: ['years', 'year', 'yrs', 'yr', 'y'],
		week: ['weeks', 'week', 'w'],
		day: ['days', 'day', 'd'],
		hour: ['hours', 'hour', 'hrs', 'hr', 'h'],
		minute: ['minutes', 'minute', 'mins', 'min', 'm'],
		second: ['seconds', 'second', 'secs', 'sec', 's'],
		millisecond: ['milliseconds', 'millisecond', 'msecs', 'msec', 'ms'],
	}

	const some = (list: string[]) => list.some((t) => t === type)

	if (some(timeUnits.year)) return n * y
	if (some(timeUnits.week)) return n * w
	if (some(timeUnits.day)) return n * d
	if (some(timeUnits.hour)) return n * h
	if (some(timeUnits.minute)) return n * m
	if (some(timeUnits.second)) return n * s
	if (some(timeUnits.millisecond)) return n

	return undefined
}

/**
 * Pluralization helper.
 */

function plural(
	milliseconds: number,
	msAbs: number,
	n: number,
	name: 'day' | 'hour' | 'minute' | 'second',
) {
	const isPlural = msAbs >= n * 1.5
	return `${Math.round(milliseconds / n)} ${name}${isPlural ? 's' : ''}`
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(milliseconds: number) {
	const msAbs = Math.abs(milliseconds)

	if (msAbs >= d) return plural(milliseconds, msAbs, d, 'day')
	if (msAbs >= h) return plural(milliseconds, msAbs, h, 'hour')
	if (msAbs >= m) return plural(milliseconds, msAbs, m, 'minute')
	if (msAbs >= s) return plural(milliseconds, msAbs, s, 'second')
	return `${milliseconds} ms`
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(milliseconds: number) {
	const msAbs = Math.abs(milliseconds)
	if (msAbs >= d) return `${Math.round(milliseconds / d)}d`
	if (msAbs >= h) return `${Math.round(milliseconds / h)}h`
	if (msAbs >= m) return `${Math.round(milliseconds / m)}m`
	if (msAbs >= s) return `${Math.round(milliseconds / s)}s`
	return `${milliseconds}ms`
}

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} value
 * @param {{ long: boolean }} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

export function ms(value: string | number, options?: { long: boolean }) {
	const defaultOptions = options || { long: false }
	if (typeof value === 'string' && value.length > 0) return parse(value)
	if (typeof value === 'number' && Number.isFinite(value)) {
		return defaultOptions.long ? fmtLong(value) : fmtShort(value)
	}
	throw new Error(`val is not a non-empty string or a valid number. val=${JSON.stringify(value)}`)
}
