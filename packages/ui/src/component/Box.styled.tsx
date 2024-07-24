'use client'

import styled from '@emotion/styled'
import type { Property } from 'csstype'
import { margin } from '@repo/utils/emotion'
import { isNumber } from '@repo/utils'

interface DivisionProps {
	alignSelf?: Property.AlignSelf
	/** theme에서 설정된 `spacing`값을 곱하여 계산됩니다. */
	mb?: number
	display?: Property.Display
	position?: Property.Position
	left?: number
	top?: number
}

const Division = styled('div')<DivisionProps>`
	${({ display }) => display && `display: ${display}`};
	${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
	${({ mb }) => isNumber(mb) && margin.bottom(mb)};
	${({ position }) => position && `position: ${position};`}
	${({ left, theme }) => isNumber(left) && `left: ${theme.spacer(left)};`}
    ${({ top, theme }) => isNumber(top) && `top: ${theme.spacer(top)};`}
`

type BoxProps = React.PropsWithChildren<
	React.ComponentProps<typeof Division> & {
		className?: string
	}
>

/**
 * @prop {@link Property.AlignSelf} alignSelf
 * @prop {string} [className] optional
 */
export function Box({
	children,
	alignSelf,
	mb,
	display,
	position,
	left,
	top,
	className,
	...rest
}: BoxProps) {
	return (
		<Division
			alignSelf={alignSelf}
			mb={mb}
			display={display}
			position={position}
			left={left}
			top={top}
			className={className}
			{...rest}
		>
			{children}
		</Division>
	)
}
