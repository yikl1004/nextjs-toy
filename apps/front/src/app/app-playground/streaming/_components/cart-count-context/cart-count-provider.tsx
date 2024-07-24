import {
	CartCountContext,
	State,
} from '@page/app-playground/streaming/_components/cart-count-context'
import { useMemo, useState } from 'react'

export function CartCountProvider({
	children,
	initialCartCount,
}: {
	children: React.ReactNode
	initialCartCount: number
}) {
	const [optimisticCartCount, setOptimisticCartCount] = useState<null | number>(null)

	const count = optimisticCartCount !== null ? optimisticCartCount : initialCartCount

	const values = useMemo<State>(() => [count, setOptimisticCartCount], [count])

	return <CartCountContext.Provider value={values}>{children}</CartCountContext.Provider>
}
