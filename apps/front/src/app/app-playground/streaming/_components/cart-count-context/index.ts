'use client'

import { createContext } from 'react'

export type State = [number, React.Dispatch<React.SetStateAction<null | number>>]

export const CartCountContext = createContext<State | undefined>(undefined)
