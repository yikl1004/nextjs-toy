'use client'

import styled from '@emotion/styled'
import type { Property } from 'csstype'
import { margin, flex } from '@repo/utils/emotion'
import { isNumber } from '@repo/utils'

interface AlignmentProps {
	flex?: boolean
	justifyContent?: Property.JustifyContent
	alignItems?: Property.AlignItems
	flexWrap?: boolean
	gap?: number
	mt?: number
}

export const Alignment = styled('div')<AlignmentProps>`
	${({ justifyContent, alignItems }) => flex({ justify: justifyContent, align: alignItems })}
	gap: ${(props) => (props.gap ? `${0.25 * props.gap}rem` : 'unset')};
	flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'unset')};
	${({ mt }) => isNumber(mt) && margin.top(mt)}
`
