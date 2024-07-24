'use client'

import { Box } from '@component/Box.styled'
import { MenuAlt2Icon } from '@icon/MenuAlt2Icon'
import { XIcon } from '@icon/XIcon'
import { useGnbControll } from '@component/GlobalNavigation/store'
import { HamburgerButton } from '@component/GlobalNavigation/styled'

export const MenuToggle = () => {
	const [state, setState] = useGnbControll()

	const handleClick = () => {
		setState((prevState) => {
			return { toggle: !prevState.toggle }
		})
	}

	return (
		<HamburgerButton type="button" onClick={handleClick}>
			<Box className="title">Menu</Box>
			{state.toggle ? <XIcon /> : <MenuAlt2Icon />}
		</HamburgerButton>
	)
}
