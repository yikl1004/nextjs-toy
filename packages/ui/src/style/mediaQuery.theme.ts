export const breakpoint = { sm: 480, md: 768, lg: 1024, xl: 1280 } as const
// styled-system용 breakpoints
export const breakpoints = [
	`${breakpoint.md}px`,
	`${breakpoint.lg}px`,
	`${breakpoint.xl}px`,
] as const
export const mediaQueries = {
	over: {
		md: `@media only screen and (min-width : ${breakpoint.md}px)`,
		lg: `@media only screen and (min-width : ${breakpoint.lg}px)`,
		xl: `@media only screen and (min-width : ${breakpoint.xl}px)`,
	},
	under: {
		md: `@media only screen and (max-width : calc(${breakpoint.md}px - 1px))`,
		lg: `@media only screen and (max-width : calc(${breakpoint.lg}px - 1px))`,
		xl: `@media only screen and (max-width : calc(${breakpoint.xl}px - 1px))`,
	},
	only: {
		sm: `@media only screen and (max-width : ${breakpoint.md - 1}px)`,
		md: `@media only screen and (min-width : ${breakpoint.md}px) and (max-width : ${breakpoint.lg - 1}px)`,
		lg: `@media only screen and (min-width : ${breakpoint.lg}px) and (max-width : ${breakpoint.xl - 1}px)`,
		xl: `@media only screen and (min-width : ${breakpoint.xl}px)`,
	},
	hover: '@media (hover: hover) and (pointer: fine)',
} as const
