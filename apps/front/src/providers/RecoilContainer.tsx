'use client'

import { RecoilRoot } from 'recoil'

type RecoilContainerProps = React.PropsWithChildren

export function RecoilContainer({ children }: RecoilContainerProps) {
	return <RecoilRoot>{children}</RecoilRoot>
}
