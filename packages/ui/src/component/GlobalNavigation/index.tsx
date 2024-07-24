/* eslint-disable @rushstack/no-new-null */
import { NavContainer } from '@component/GlobalNavigation/NavContainer'
import { Section } from '@component/GlobalNavigation/Section'
import { GlobalNavigationStyled } from '@component/GlobalNavigation/styled'
import { MenuToggle } from '@component/GlobalNavigation/MenuToggle'
import { AppLogo } from '@component/GlobalNavigation/AppLogo'
import { ScrollContainer } from '@component/ScrollContainer'
import type { Menu } from '@component/GlobalNavigation/types'

interface GlobalNavigationProps {
	menus: Menu[]
	segment: string | null
}

export const GlobalNavigation = ({ menus, segment }: GlobalNavigationProps) => {
	return (
		<GlobalNavigationStyled>
			<AppLogo />
			<MenuToggle />
			<ScrollContainer
				style={{ maxHeight: 'calc(100% - 3.5rem)', height: 'calc(100% - 56px)' }}
			>
				<NavContainer>
					{menus.map((section) => (
						<Section
							key={section.name}
							items={section.items}
							name={section.name}
							segment={segment}
						/>
					))}
				</NavContainer>
			</ScrollContainer>
		</GlobalNavigationStyled>
	)
}
