'use client'

import { useGnbControll } from '@component/GlobalNavigation/store'
import { NavContainerStyled } from '@component/GlobalNavigation/styled'
import { Spacer } from '@component/Spacer.styled'

type NavContainerProps = React.PropsWithChildren

export function NavContainer({ children }: NavContainerProps) {
	const [{ toggle }] = useGnbControll()

	return (
		<NavContainerStyled open={toggle}>
			<Spacer vertical={6} px={2} pb={5} pt={5}>
				{children}
			</Spacer>
		</NavContainerStyled>
	)
}
