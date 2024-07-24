import { CounterContext } from '@page/app-playground/context/_context'
import { isUndefined } from '@repo/utils'
import { useContext } from 'react'

export const useCounter = () => {
	const context = useContext(CounterContext)
	if (isUndefined(context)) {
		throw new Error('useCounter must be used within a CounterProvider')
	}
	return context
}
