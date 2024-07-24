'use client'

import styled from '@emotion/styled'

export const Title = styled('h1')<{ top?: boolean }>`
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 500;
	color: ${({ top, theme }) => (top ? theme.color.gray300 : theme.color.gray400_80)};
`
