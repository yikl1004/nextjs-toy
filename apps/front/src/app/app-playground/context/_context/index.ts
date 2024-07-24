'use client'

import { createContext } from 'react'

export type State = [number, React.Dispatch<React.SetStateAction<number>>]

export const CounterContext = createContext<State | undefined>(undefined)
