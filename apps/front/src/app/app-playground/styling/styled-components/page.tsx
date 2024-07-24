'use client'

import styled from '@emotion/styled'
import { Spacer, ArticleTitleStyled } from '@repo/ui'
import { margin, padding } from '@repo/utils/emotion'

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1.5rem /* 24px */;
`

const SkeletonInner = styled.div`
	${padding(4)} /* => 1rem => 16px */
	background-color: ${({ theme }) => theme.color.gray900_80};
	border-radius: 1rem /* 16px */;
`

const SkeletonImg = styled.div`
	height: 3.5rem /* 56px */;
	border-radius: 0.5rem /* 8px */;
	background-color: ${({ theme }) => theme.color.gray700};
`

const SkeletonBtn = styled.div`
	${margin.top(3)} /* 12px */
	width: 25%;
	height: 0.75rem /* 12px */;
	border-radius: 0.5rem /* 8px */;
	background-color: ${({ theme }) => theme.color.vercel_pink};
`

const SkeletonLineOne = styled.div`
	${margin.top(3)} /* 12px */
	height: 0.75rem /* 12px */;
	width: 91.666667%;
	border-radius: 0.5rem /* 8px */;
	background-color: ${({ theme }) => theme.color.gray700};
`

const SkeletonLineTwo = styled.div`
	${margin.top(3)} /* 12px */
	height: 0.75rem /* 12px */;
	width: 66.666667%;
	border-radius: 0.5rem /* 8px */;
	background-color: ${({ theme }) => theme.color.gray700};
`

function Skeleton() {
	return (
		<SkeletonInner>
			<SkeletonImg />
			<SkeletonBtn />
			<SkeletonLineOne />
			<SkeletonLineTwo />
		</SkeletonInner>
	)
}

export default function Page() {
	return (
		<Spacer vertical={4}>
			<ArticleTitleStyled>Styled with Styled Components</ArticleTitleStyled>
			<Container>
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</Container>
		</Spacer>
	)
}
