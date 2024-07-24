'use client'

import styled from '@emotion/styled'
import { Spacer } from '@component/Spacer.styled'

export const NotFoundStyled = styled(Spacer)`
	color: ${({ theme }) => theme.color.vercel_pink};

	h2 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	p {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
`
