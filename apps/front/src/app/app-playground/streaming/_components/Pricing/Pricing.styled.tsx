'use client'

import styled from '@emotion/styled'
import { Spacer } from '@repo/ui'
import { padding } from '@repo/utils/emotion'

export const PricingStyled = styled(Spacer)`
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray900};
	${padding(3)}
`
