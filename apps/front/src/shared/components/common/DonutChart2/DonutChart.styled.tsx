import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const PathStyled = styled(motion.path)<{ rotate: number }>`
	transform-origin: center;
	transform: rotate(${({ rotate }) => rotate}deg) scale(1);
	transition: transform 300ms ease-in-out;

	&:hover {
		transform: rotate(${({ rotate }) => rotate}deg) scale(1.2);
	}
`

export const LineStyled = styled('line')<{ rotate: number; strokeWidth?: number }>`
	stroke-width: ${({ strokeWidth }) => strokeWidth ?? 4};
	stroke: #000000; // mask, opacity: 0
	transform-origin: center;
	transform: rotate(-${({ rotate }) => rotate}deg);
`

export const DonutChartContainerStyled = styled.div<{ width?: number; height?: number }>`
	width: ${({ width }) => width ?? 200}px;
	height: ${({ height }) => height ?? 200}px;
`
