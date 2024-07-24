'use client'

import styled from '@emotion/styled'
import { margin, padding } from '@repo/utils/emotion'
import { Box } from '@component/Box.styled'
import { Typography } from '@component/Typography'

const ProseStyled = styled('div')`
	max-width: none;
	color: ${({ theme }) => theme.color.white};
	font-size: 0.875rem;
	line-height: 1.7142857;

	& > h1.title {
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
		${margin({ top: 0, bottom: '0.8em' })}
	}

	& > ul {
		${margin({ y: '1.1428571em', left: '1.5714286em' })}
		list-style-type: disc;

		& > li {
			${margin.y('0.2857143em')}
			${padding.left('0.4285714em')}
			font-size: 0.875rem;
			line-height: 1.7142857;

			&::marker {
				color: ${({ theme }) => theme.vars.prose.lead};
			}
		}
	}

	code {
		${margin.y('1.1428571em')}
		font-size: 0.8571429em;
		color: ${({ theme }) => theme.color.white};
		font-weight: 600;

		&:before,
		&:after {
			content: '\`';
		}
	}
`

type ProseProps = React.PropsWithChildren<{
	title?: React.ReactNode
	paragraph?: React.ReactNode
	smallParagraph?: React.ReactNode
	buttonGroup?: React.ReactNode
}>

export function Prose({ title, paragraph, smallParagraph, buttonGroup, children }: ProseProps) {
	return (
		<ProseStyled>
			{title && (
				<Typography variant="h1" className="title">
					{title}
				</Typography>
			)}
			{paragraph && <ul>{paragraph}</ul>}
			{children}
			{smallParagraph && <ul className="text-xs">{smallParagraph}</ul>}
			{buttonGroup && (
				<Box display="flex" mb={0}>
					{buttonGroup}
				</Box>
			)}
		</ProseStyled>
	)
}
