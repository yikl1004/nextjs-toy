import { demoShadow, demoVars, demoSpacing } from './demo'
import color from './color.theme'
import { breakpoint, breakpoints, mediaQueries } from './mediaQuery.theme'
import { space, spacer } from './space.theme'
import typo from './typo.theme'
import vars from './vars.theme'
import zIndexes from './zIndexes.theme'
import * as keyframes from './keyframes'

declare module '@emotion/react' {
	type AppTheme = typeof theme
	export interface Theme extends AppTheme {}
}

export const theme = {
	spacing: demoSpacing,
	spaceLevels: space,
	spacer,
	breakpoint,
	breakpoints,
	mediaQueries,
	typo,
	color,
	zIndexes,
	vars: {
		...vars,
		...demoVars,
	},
	keyframes,
	shadow: demoShadow,
} as const
