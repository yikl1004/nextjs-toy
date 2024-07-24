'use client'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const points = keyframes`
    to {
        transform: scale(1);
    }
`

export const PointTitle = styled.strong`
	position: absolute;
	z-index: 1;
	left: 0;
	bottom: -12px;
	display: inline-block;
	height: 20px;
	line-height: 20px;
	font-size: 16px;
	font-weight: 700;
	color: #666;
	transform: translate(-20%, 100%);
	text-align: center;
`
export const PointButton = styled.button<{ animateDelay: number; count: number; size?: number }>`
	position: absolute;
	bottom: calc(${({ count }) => count}% - 8px);
	z-index: 1;
	display: block;
	margin: 0;
	padding: 0;
	left: -${({ size = 16 }) => size / 2}px;
	width: ${({ size = 16 }) => size}px;
	height: ${({ size = 16 }) => size}px;
	border: ${({ size = 16 }) => size / 4}px solid #6910ef;
	background-color: #fff;
	border-radius: 100%;
	cursor: pointer;
	transform: scale(0);
	animation: ${points} 0.2s forwards;
	animation-delay: ${({ animateDelay }) => 0.1 * animateDelay}s;

	& > * {
		pointer-events: none;
	}
`

export const PointA11y = styled.span`
	position: absolute;
	overflow: hidden;
	height: 1px;
	width: 1px;
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	word-break: initial;
	word-wrap: initial;
`
export const PointTip = styled.div<{ isExpanded: boolean }>`
	position: absolute;
	left: 3px;
	top: -11px;
	${({ isExpanded }) => (isExpanded ? 'display: flex;' : 'display: none;')}
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 22px;
	border-radius: 4px;
	background-color: #6910ef;
	text-align: center;
	transform: translate(-50%, -100%);

	strong {
		color: #fff;
		font-size: 14px;
		font-weight: 700;
		line-height: 1;
	}

	&:after {
		display: block;
		content: '';
		clear: both;
		position: absolute;
		z-index: 11;
		left: 12px;
		bottom: -6px;
		width: 0;
		height: 0;
		border: 6px solid transparent;
		border-bottom-width: 0;
		border-left-width: 5px;
		border-right-width: 5px;
		pointer-events: none;
		border-top-color: #6910ef;
	}
`

export const PointContainer = styled('div')<{
	width: number
	index: number
}>`
	position: relative;
	display: inline-block;
	width: ${({ width }) => width}%;
	height: 200px;
	box-sizing: border-box;

	&:before {
		display: block;
		content: '';
		clear: both;
		position: absolute;
		left: -3px;
		top: 0;
		width: 6px;
		height: 100%;
		background-color: #f3f4f5;
		border-radius: 6px;
	}
`

export const LineChartContainer = styled('div')<{ length: number }>`
	padding-bottom: 30px;

	.graph_inner {
		position: relative;
		margin: 0 auto;
		width: 100%;
		height: 286px;
		padding-bottom: 86px;

		.graph_bg {
			position: relative;
			z-index: 10;
			display: flex;
			align-items: flex-end;
			padding: 0 15px;
			height: 100%;
			font-size: 0;
			line-height: 0;
			transform-origin: center;
		}
	}
`
