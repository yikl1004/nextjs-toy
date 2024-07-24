'use client'

import styled from '@emotion/styled'
import { Box } from '@repo/ui'
import { margin, padding } from '@repo/utils/emotion'

const ContentStyled = styled('div')`
	box-shadow: ${({ theme }) => theme.shadow.black};
	${padding('1px')}
	background-image: radial-gradient(
		at left top,
		${({ theme }) => theme.color.gray500},
		50px,
		${({ theme }) => theme.color.gray800} 50%
	);
	border-radius: 0.5rem;
	${margin.y(8)}

	.content {
		${padding(3.5)}
		background-color: ${({ theme }) => theme.color.black};
		border-radius: 0.5rem;

		/* @media lg */
		${({ theme }) => theme.mediaQueries.over.lg} {
			${padding(6)}
		}
	}
`

type ContentStyledProps = React.PropsWithChildren

export function Content({ children }: ContentStyledProps) {
	return (
		<ContentStyled>
			<Box className="content">{children}</Box>
		</ContentStyled>
	)
}
