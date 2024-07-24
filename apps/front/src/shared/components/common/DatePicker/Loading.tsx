'use client'

import { useDatePickerContext } from '@components/common/DatePicker/context/useDatePickerContext'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const loadingRotationAnimate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const LoadingStyled = styled('div')`
	width: 48px;
	height: 48px;
	border: 5px solid #fff;
	border-bottom-color: transparent;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: ${loadingRotationAnimate} 1s linear infinite;
`

export const Loading = () => {
	const { isLoading } = useDatePickerContext()

	return isLoading ? <LoadingStyled /> : null
}
