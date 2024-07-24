'use client'

import styled from '@emotion/styled'

const PropTestStyled = styled('div', {
	shouldForwardProp: (prop) => prop !== 'color',
})<{ $color: string }>(({ color }) => {
	return {
		color,
	}
})

export const PassPropsTest = () => {
	return <PropTestStyled $color="#ff0000">PassPropsTest</PropTestStyled>
}
