'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { padding } from '@repo/utils/emotion'
import { demoColor, demoMediaQueries } from '@style/demo'
import {
	type ElementType,
	forwardRef,
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
} from 'react'

const SelectableButtonBaseCss = css`
	border-radius: 0.5rem;
	${padding({ x: 3, y: 1 })}
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	background-color: ${demoColor.gray700};
	color: ${demoColor.gray100};

	${demoMediaQueries.hover} {
		&:hover {
			background-color: ${demoColor.gray500};
			color: ${demoColor.white};
		}
	}

	&.active {
		background-color: ${demoColor.vercel_blue};
		color: ${demoColor.white};
	}
`

const ButtonStyled = styled('button')<{ active?: boolean }>`
	${SelectableButtonBaseCss}
`

interface SelectableButtonProps<C extends ElementType> {
	as?: C
	children?: React.ReactNode
	active?: boolean
}

export const SelectableButton = forwardRef(
	<C extends ElementType = 'button'>(
		{
			as,
			children,
			...props
		}: SelectableButtonProps<C> &
			Omit<ComponentPropsWithoutRef<C>, keyof SelectableButtonProps<C>>,
		ref?: ComponentPropsWithRef<C>['ref'],
	) => {
		return (
			<ButtonStyled as={as} ref={ref} {...props}>
				{children}
			</ButtonStyled>
		)
	},
)

SelectableButton.displayName = 'SelectableButton'
