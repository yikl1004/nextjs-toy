export const demoSpacing = 0.25

export const demoColor = {
	vercel_cyan: 'rgb(80, 227, 194)',
	vercel_pink: 'rgb(255, 0, 128)',
	white: 'rgb(255, 255, 255)',
	black: 'rgba(0, 0, 0)',
	white_70: 'rgba(255, 255, 255, 0.7)',
	vercel_blue: 'rgb(0, 112, 243)',
	vercel_blue_90: 'rgba(0, 112, 243, 0.9)',
	violet: 'rgb(121, 40, 202)',
	orange: 'rgb(245, 166, 35)',
	gray50: 'rgb(250, 250, 250)',
	gray100: 'rgb(244, 244, 245)',
	gray200: 'rgb(228, 228, 231)',
	gray400: 'rgb(161, 161, 170)',
	gray400_80: 'rgb(161, 161, 170, 0.8)',
	gray300: 'rgb(212, 212, 216)',
	gray500: 'rgb(113, 113, 122)',
	gray600: 'rgb(82, 82, 91)',
	gray700: 'rgb(63, 63, 70)',
	gray800: 'rgb(39, 39, 42)',
	gray900: 'rgb(24, 24, 27)',
	gray900_80: 'rgba(24, 24, 27, 0.8)',
	text: {
		cyan800: 'rgb(21, 94, 117)',
		red50: 'rgb(254, 242, 242)',
		violet100: 'rgb(237, 233, 254)',
	},
	border: {
		section: `radial-gradient( at left top,rgb(113, 113, 122),50px,rgb(39, 39, 42) 50% )`, // background-image: gradient
	},
	bg: {
		pink600: 'rgb(219, 39, 119)',
	},
}

export const demoBreakpoints = { /** xs: 320, */ sm: 480, md: 768, lg: 1024, xl: 1280 } as const

export const demoMediaQueries = {
	sm: `@media only screen and (min-width : ${demoBreakpoints.sm}px)`,
	md: `@media only screen and (min-width : ${demoBreakpoints.md}px)`,
	lg: `@media only screen and (min-width : ${demoBreakpoints.lg}px)`,
	xl: `@media only screen and (min-width : ${demoBreakpoints.xl}px)`,
	hover: '@media (hover: hover) and (pointer: fine)',
} as const

export const demoShadow = {
	black: 'rgba(0, 0, 0, 0.2) 0px 10px 15px -3px, rgba(0, 0, 0, 0.2) 0px 4px 6px -4px',
	vercel_pink:
		'rgb(255, 255, 255) 0px 0px 0px 0px, rgb(255, 0, 128) 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px',
	addressBar: 'rgba(0,0,0,0.2) 0px 10px 15px -3px, rgba(0,0,0,0.2) 0px 4px 6px -4px',
	content: 'rgba(0, 0, 0, 0.2) 0px 10px 15px -3px, rgba(0, 0, 0, 0.2) 0px 4px 6px -4px',
} as const

export const demoVars = {
	prose: {
		body: 'rgb(55, 65, 81)',
		headings: 'rgb(17, 24, 39)',
		lead: 'rgb(75, 85, 99)',
		links: 'rgb(17, 24, 39)',
		bold: 'rgb(17, 24, 39)',
		counters: 'rgb(107, 114, 128)',
		bullets: 'rgb(209, 213, 219)',
		hr: 'rgb(229, 231, 235)',
		quotes: 'rgb(17, 24, 39)',
		quoteBorders: '#e5e7eb',
		captions: 'rgb(107, 114, 128)',
		code: 'rgb(17, 24, 39)',
		preCode: 'rgb(229, 231, 235)',
		preBg: 'rgb(31, 41, 55)',
		thBorders: 'rgb(209, 213, 219)',
		tdBorders: 'rgb(229, 231, 235)',
		invertBody: 'rgb(209, 213, 219)',
		invertHeadings: 'rgb(255, 255, 255)',
		invertLead: 'rgb(156, 163, 175)',
		invertLinks: 'rgb(255, 255, 255)',
		invertBold: 'rgb(255, 255, 255)',
		invertCounters: 'rgb(156, 163, 175)',
		invertBullets: 'rgb(75, 85, 99)',
		invertHr: 'rgb(55, 65, 81)',
		invertQuotes: 'rgb(243, 244, 246)',
		invertQuoteBorders: 'rgb(55, 65, 81)',
		invertCaptions: 'rgb(156, 163, 175)',
		invertCode: 'rgb(255, 255, 255)',
		invertPreCode: 'rgb(209, 213, 219)',
		invertPreBg: 'rgba(0, 0, 0, 0.5)',
		invertThBorders: 'rgb(75, 85, 99)',
		invertTdBorders: 'rgb(55, 65, 81)',
	},
} as const
