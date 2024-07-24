'use client'

import styled from '@emotion/styled'
import { margin, padding } from '@repo/utils/emotion'
import { Box } from '@repo/ui'

const ContainerStyled = styled.div`
	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		${padding.left(72)}
	}

	.container {
		max-width: 56rem;
		${margin.x('auto')}
		${padding({ x: 2, top: 20 })}

		/* @media lg */
		${({ theme }) => theme.mediaQueries.over.lg} {
			${padding(8)}
		}
	}
`

type ContainerStyledProps = React.PropsWithChildren

export function Container({ children }: ContainerStyledProps) {
	return (
		<ContainerStyled>
			<Box className="container">{children}</Box>
		</ContainerStyled>
	)
}
