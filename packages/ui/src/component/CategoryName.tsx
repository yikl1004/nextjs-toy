'use client'

import styled from '@emotion/styled'

const CategoryNameStyled = styled('h1')`
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 500;
	color: ${({ theme }) => theme.color.gray400_80};
`

type CategoryNameProps = React.PropsWithChildren<{
	name?: string
}>

export function CategoryName({ name, children }: CategoryNameProps) {
	return (
		<CategoryNameStyled aria-roledescription="title">
			{children}
			&nbsp;
			{name}
		</CategoryNameStyled>
	)
}
