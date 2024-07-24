import { isDevelopment } from './isDevelopment'
import { noop } from './noop'

export const logger = (...message: unknown[]) => {
	if (isDevelopment()) {
		console.log(...message)
	}
}
logger.warn = isDevelopment() ? console.warn : noop
logger.info = isDevelopment() ? console.info : noop
logger.error = isDevelopment() ? console.error : noop
