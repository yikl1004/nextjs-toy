'use client'

import { CounterContext, type State } from '@page/app-playground/context/_context'
import { useMemo, useState } from 'react'

export function CounterProvider({ children }: { children: React.ReactNode }) {
	const [count, setCount] = useState(0)
	const values = useMemo(() => [count, setCount] as State, [count])

	return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
}
