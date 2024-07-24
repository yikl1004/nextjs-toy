'use client'

import { Typography } from '@component/Typography'
import { useGnbControll } from '@component/GlobalNavigation/store'
import { AppLogoStyled } from '@component/GlobalNavigation/styled'
import type { LinkComponent } from '@typings/index'

interface AppLogoProps {
	as?: LinkComponent
}

export const AppLogo = ({ as }: AppLogoProps) => {
	const [, setGnbState] = useGnbControll()
	const handleClose = () => {
		setGnbState(() => ({ toggle: false }))
	}

	const Link = as || 'a'

	return (
		<AppLogoStyled>
			<Link href="/" className="link" onClick={handleClose}>
				<Typography variant="h3" className="title">
					App Router
				</Typography>
			</Link>
		</AppLogoStyled>
	)
}
