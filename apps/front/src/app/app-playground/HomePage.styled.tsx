'use client'

import styled from '@emotion/styled'
import { margin } from '@repo/utils/emotion'

const PageTitle = styled('h1')`
	color: ${({ theme }) => theme.color.gray300};
	font-weight: 500;
	font-size: 1.25rem;
	line-height: 1.75rem;
`

const PageContent = styled('div')`
	${margin({ top: 8, bottom: 0 })}
	color: ${({ theme }) => theme.color.white};

	& > :not([hidden]) ~ :not([hidden]) {
		${margin({ top: 10, bottom: 0 })}
	}
`

const Container = styled('div')`
	& > :not([hidden]) ~ :not([hidden]) {
		${margin({ top: 8, bottom: 0 })}
	}
`

type HomePageStyledProps = React.PropsWithChildren<{
	title: string
}>

export default function HomePageStyled({ children, title }: HomePageStyledProps) {
	return (
		<Container>
			<PageTitle>{title}</PageTitle>
			<PageContent>{children}</PageContent>
		</Container>
	)
}
