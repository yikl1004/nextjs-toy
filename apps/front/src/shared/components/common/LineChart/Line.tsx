'use client'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useLineChartContext } from './context/useLineChartState'

const linear = keyframes`
    to {
        width: 100%;
    }
`

const LineStyled = styled('div')`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 200px;
	transform: scaleY(-1) scaleX(1);
	transform-origin: center;
	padding: 0 15px;

	svg {
		fill: none;
		width: 0;
		animation: ${linear} 2s forwards;

		polyline {
			stroke: rgba(105, 16, 239, 0.2);
			stroke-width: 4px;
		}
	}
`

export const Line = () => {
	const { polylinePoints } = useLineChartContext()

	/* 
        x 값 : 57 간격으로 올라감 (예: 0, 57, 114, 171, 228, 285, 342, 399, 456, 513)
        y 값 : button class="graph_point" top % 의 두배 수 (예: 10% -> 20), 2배수인 이유는 높이가 200px로 고정이기 때문
        적용 : points="x,y x,y ....."
    */
	return (
		<LineStyled>
			<svg height="200">
				<polyline points={polylinePoints} />
			</svg>
		</LineStyled>
	)
}
