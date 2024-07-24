'use client'

import styled from '@emotion/styled'
import { Fragment } from 'react'
import { padding } from '@repo/utils/emotion'
import { highlight } from '@style/keyframes'
import { Box } from '@component/Box.styled'

const ParamsStyled = styled('div')`
	${padding.x(2)}
	color: ${({ theme }) => theme.color.gray500};

	.paths {
		${padding.x(1)}

		.path {
			color: ${({ theme }) => theme.color.gray100};
			animation: ${highlight} 1s ease-in-out 1;
		}
	}
`

interface ParamsProps {
	searchParams: URLSearchParams
}

export const Params = ({ searchParams }: ParamsProps) => {
	return searchParams.toString().length !== 0 ? (
		<ParamsStyled>
			<Box as="span">?</Box>
			{Array.from(searchParams.entries()).map(([key, value], index) => (
				<Fragment key={key}>
					{index !== 0 ? <Box as="span">&</Box> : null}
					<Box as="span" className="paths">
						<Box as="span" className="path">
							{key}
						</Box>
						<Box as="span">=</Box>
						<Box as="span" className="path">
							{value}
						</Box>
					</Box>
				</Fragment>
			))}
		</ParamsStyled>
	) : null
}
