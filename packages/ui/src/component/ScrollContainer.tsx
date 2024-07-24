'use client'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import type { CSSProperties } from 'react'

type ScrollContainerProps = React.PropsWithChildren<{
	style?: CSSProperties
}>

export const ScrollContainer = ({ children, style }: ScrollContainerProps) => {
	return <SimpleBar style={style}>{children}</SimpleBar>
}
