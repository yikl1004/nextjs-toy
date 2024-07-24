'use client'

import 'simplebar-react/dist/simplebar.min.css'
import SimpleBar from 'simplebar-react'
import type { CSSProperties } from 'react'

type ScrollContainerProps = React.PropsWithChildren<{
	style?: CSSProperties
}>

export const ScrollContainer = ({ children, style }: ScrollContainerProps) => {
	return <SimpleBar style={style}>{children}</SimpleBar>
}
