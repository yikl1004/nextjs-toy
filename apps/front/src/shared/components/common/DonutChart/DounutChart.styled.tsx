import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const donutChartLoad = (offset?: string | number) => keyframes`
    100% {
        stroke-dashoffset: ${offset};
    }
`

const circle = css`
	transform-origin: center;
	fill: none;
	stroke-width: 50;
`

export const DonutChartContainer = styled('div')`
	width: 180px;
	height: 180px;
	transform: scaleX(-1);
	transform-origin: center;
	margin: 50px auto 32px;
	svg {
		transform: rotate(-90deg);
		transform-origin: center;
	}
`

interface SVGCirclePropps {
	cssTransform: string
	dashoffset: number
}

export const SVGCircle = styled('circle')<SVGCirclePropps>`
	${circle}
	transform: ${({ cssTransform }) => cssTransform};
	animation: ${({ dashoffset }) => donutChartLoad(dashoffset)} 1s forwards;
`

export const SVGCirlceBackground = styled('circle')`
	stroke: #f3f4f5;
	stroke-width: 51;
	stroke-dasharray: ${2 * Math.PI * 65};
	stroke-dashoffset: 0;
	animation: ${donutChartLoad(2 * Math.PI * 65)} 1s forwards;
	transform: scaleX(-1) rotate(-180deg);
`

export const LegendsContainer = styled('ul')`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 8px 9px;
	max-width: 241px;
	margin: 0 auto 32px;
`

export const LegendItem = styled('li')<{ color: string }>`
	width: calc((100% - 9px) / 2);
	&:before {
		content: '';
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-bottom: -1px;
		margin-right: 9px;
		background-color: ${({ color }) => color};
	}
`
