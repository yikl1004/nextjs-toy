'use client'

/**
 * @file PushSubscribe.tsx
 * @description 웹푸시 테스트를 위한 컴포넌트 입니다.
 * DEV: 개발시 삭제
 */

import styled from '@emotion/styled'
import { X } from 'phosphor-react'
import { useLocalStorage } from '@repo/hooks'
import { getFirebaseToken /** useFCM */ } from '@lib/firebase'
// import { colorBounce } from '@ui/style/keyframes'
import { logger } from '@repo/utils'
// import { demoMediaQueries } from '@ui/style/demo'

const Container = styled.div<{ close: boolean }>`
	position: fixed;
	top: ${({ close, theme }) => (close ? theme.spacer(-11.5) : 0)};
	z-index: 10;
	width: 100%;
	height: 46px;
	background-color: rgb(67, 255, 76);
	transition: top 300ms ease-in-out;

	& > .inner {
		height: 100%;
		margin: 0 auto;
		display: flex;

		${({ theme }) => theme.mediaQueries.only.sm} {
			width: 100%;
		}

		${({ theme }) => theme.mediaQueries.over.lg} {
			width: 1024px;
		}

		button.subscribe {
			width: 100%;
			text-align: center;
			animation: ${({ theme }) => theme.keyframes.colorBounce} 1s ease infinite;
		}
	}
`

export const LS_PUSH_SUBSCRIBE_OPEN = 'push_subscribe_open'

export function PushSubscribe() {
	const [localState, handleSetLocalState] = useLocalStorage(LS_PUSH_SUBSCRIBE_OPEN, false)

	// useFCM()

	const handleClose = () => {
		handleSetLocalState(false)
	}

	const handleGetFirebaseToken = () => {
		getFirebaseToken()
			.then((firebaseToken: string | undefined) => {
				if (firebaseToken) {
					logger.info(firebaseToken)
				}
			})
			.catch((error) => {
				logger.error(error)
			})
	}

	return (
		<Container close={!localState}>
			<div className="inner">
				<button type="button" className="subscribe" onClick={handleGetFirebaseToken}>
					push subscribe
				</button>
				<button type="button" aria-label="close" onClick={handleClose}>
					<X color="#000" />
				</button>
			</div>
		</Container>
	)
}
