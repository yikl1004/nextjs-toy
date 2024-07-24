import { breakpoint } from './breakpoint'

export const mediaQueries = {
	over: {
		md: `@media only screen and (min-width : ${breakpoint.md}px)`,
		lg: `@media only screen and (min-width : ${breakpoint.lg}px)`,
		xl: `@media only screen and (min-width : ${breakpoint.xl}px)`,
	},
	under: {
		md: `@media only screen and (max-width : calc(${breakpoint.md} - 1px))`,
		lg: `@media only screen and (max-width : calc(${breakpoint.lg} - 1px))`,
		xl: `@media only screen and (max-width : calc(${breakpoint.xl} - 1px))`,
	},
	only: {
		sm: `@media only screen and (max-width : ${breakpoint.md - 1}px)`,
		md: `@media only screen and (min-width : ${breakpoint.md}) and (max-width : ${breakpoint.lg - 1}px)`,
		lg: `@media only screen and (min-width : ${breakpoint.lg}) and (max-width : ${breakpoint.xl - 1}px)`,
		xl: `@media only screen and (min-width : ${breakpoint.xl})`,
	},
	hover: '@media (hover: hover) and (pointer: fine)',
} as const
