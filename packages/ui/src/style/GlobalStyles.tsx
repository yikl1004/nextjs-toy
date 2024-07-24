'use client'

import { Global, type SerializedStyles } from '@emotion/react'
import { bodyBG } from './background'

interface GlobalStylesProps {
	styles?: SerializedStyles
}

export const GlobalStyles = ({ styles }: GlobalStylesProps) => {
	return <Global styles={[bodyBG, styles]} />
}
