'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

type SegmentDetectProps<T extends React.ElementType> = {
	component: T
} & Omit<React.ComponentProps<T>, 'component' | 'segment'>

export const SegmentDetect = <T extends React.ElementType>({
	component: Component,
	...restProps
}: SegmentDetectProps<T>) => {
	const segment = useSelectedLayoutSegment()
	const props = { ...restProps, segment } as React.ComponentProps<T>

	return <Component {...props} />
}
