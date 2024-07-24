'use client'

import styled from '@emotion/styled'
import { Box } from '@repo/ui'

export const Wrap = styled(Box)`
	width: 180px;
	height: 60;
	margin: 0 auto 10px;
	padding: 10px;
	text-align: center;
	background-color: wheat;

	& > * {
		color: black;
		text-decoration: none;
	}
`
