import { isClient } from '@repo/utils'

declare global {
	interface Window {
		supportsCSSTests?: {
			[K in TestNamesPascal]?: boolean
		} & { results?: { [K in TestNamesPascal]?: boolean } }
	}
}

type TestNames =
	| 'at-container'
	| 'at-container-style-properties'
	| 'at-counter-style'
	| 'at-layer'
	| 'at-property'
	| 'at-scope'
	| 'anchor-positioning'
	| 'color-function'
	| 'color-mix'
	| 'container-units'
	| 'dynamic-viewport-units'
	| 'has'
	| 'houdini-paint-api'
	| 'individual-transforms'
	| 'logical-properties'
	| 'media-range-syntax'
	| 'nesting'
	| 'nth-of-s'
	| 'overscroll-behavior'
	| 'relative-color-syntax'
	| 'scroll-timeline'
	| 'subgrid'
	| 'text-box-trim'
	| 'trigonometry'
	| 'user-invalid'
	| 'user-valid'
	| 'view-timeline'
	| 'view-transitions'
type TestNamesPascal =
	| 'AtContainer'
	| 'AtContainerStyleProperties'
	| 'AtCounterStyle'
	| 'AtLayer'
	| 'AtProperty'
	| 'AtScope'
	| 'AnchorPositioning'
	| 'ColorFunction'
	| 'ColorMix'
	| 'ContainerUnits'
	| 'DynamicViewportUnits'
	| 'Has'
	| 'HoudiniPaintApi'
	| 'IndividualTransforms'
	| 'LogicalProperties'
	| 'MediaRangeSyntax'
	| 'Nesting'
	| 'NthOfS'
	| 'OverscrollBehavior'
	| 'RelativeColorSyntax'
	| 'ScrollTimeline'
	| 'Subgrid'
	| 'TextBoxTrim'
	| 'Trigonometry'
	| 'UserInvalid'
	| 'UserValid'
	| 'ViewTimeline'
	| 'ViewTransitions'

interface Defaults {
	tests: TestNames[]
	supportsPrefix: 'supports'
	unsupportedClasses: boolean
}

const defaults: Defaults = {
	tests: [],
	supportsPrefix: 'supports',
	unsupportedClasses: true,
}

let testSupportsPrefix: Defaults['supportsPrefix'] = defaults.supportsPrefix
let testUnsupportedClasses: boolean = defaults.unsupportedClasses

const testEnvRules = {
	cqStyle: ':root { --a: b; } @container style(--a: b) { p { top: 1px; } }',
} as const

const testEnv = (
	styleBlock: string,
	el: keyof JSX.IntrinsicElements,
	prop: string,
	value: string,
) => {
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
	const style = document.createElement('style')
	const svgEl = document.createElement(el)
	style.textContent = styleBlock
	svg.appendChild(style)
	svg.appendChild(svgEl)
	document.body.appendChild(svg)
	const result = Object.is(getComputedStyle(svgEl).getPropertyValue(prop), value)
	svg.remove()
	return result
}

let testSuite: { name: TestNames; test: boolean }[] = []

if (isClient() && window.CSS) {
	testSuite = [
		{
			name: 'at-container',
			test: !!window.CSSContainerRule,
		},
		{
			name: 'at-container-style-properties',
			test: testEnv(testEnvRules.cqStyle, 'p', 'top', '1px'),
		},
		{
			name: 'at-counter-style',
			test: !!window.CSSCounterStyleRule,
		},
		{
			name: 'at-layer',
			test: !!window.CSSLayerBlockRule,
		},
		{
			name: 'at-property',
			test: !!window.CSSPropertyRule,
		},
		{
			name: 'at-scope',
			test: !!Object.prototype.hasOwnProperty.call(window, 'CSSScopeRule'),
		},
		{
			name: 'anchor-positioning',
			test: CSS.supports('anchor-name: --a'),
		},
		{
			name: 'color-function',
			test: CSS.supports('color: color(srgb 0 0 1)'),
		},
		{
			name: 'color-mix',
			test: CSS.supports('color: color-mix(in lch, white, black)'),
		},
		{
			name: 'container-units',
			test: CSS.supports('width: 1cqi'),
		},
		{
			name: 'dynamic-viewport-units',
			test: CSS.supports('width: 1dvi'),
		},
		{
			name: 'has',
			test: CSS.supports('selector(:has(+ *))'),
		},
		{
			name: 'houdini-paint-api',
			test: Object.prototype.hasOwnProperty.call(window.CSS, 'paintWorklet'),
		},
		{
			name: 'individual-transforms',
			test: window.CSS.supports('transform: scale(1)'),
		},
		{
			name: 'logical-properties',
			test: window.CSS.supports('border-start-start-radius: 1px'),
		},
		{
			name: 'media-range-syntax',
			test: !!window.matchMedia('(width >= 1px)'),
		},
		{
			name: 'nesting',
			test: window.CSS.supports('selector(& a)'),
		},
		{
			name: 'nth-of-s',
			test: window.CSS.supports('selector(:nth-child(1 of .a))'),
		},
		{
			name: 'overscroll-behavior',
			test: window.CSS.supports('overscroll-behavior: none'),
		},
		{
			name: 'relative-color-syntax',
			test: window.CSS.supports('color: rgb(from red r g b / 1%)'),
		},
		{
			name: 'scroll-timeline',
			test: window.CSS.supports('scroll-timeline-name: --a'),
		},
		{
			name: 'subgrid',
			test: window.CSS.supports('grid-template-rows: subgrid'),
		},
		{
			name: 'text-box-trim',
			test: window.CSS.supports('text-box-trim: both'),
		},
		{
			name: 'trigonometry',
			test: window.CSS.supports('width: calc(1px * cos(1deg))'),
		},
		{
			name: 'user-invalid',
			test: window.CSS.supports('selector(:user-invalid)'),
		},
		{
			name: 'user-valid',
			test: window.CSS.supports('selector(:user-valid)'),
		},
		{
			name: 'view-timeline',
			test: window.CSS.supports('view-timeline-name: --a'),
		},
		{
			name: 'view-transitions',
			test: Object.prototype.hasOwnProperty.call(window, 'ViewTransition'),
		},
	]
}

const addTest = (
	name: TestNames,
	test: boolean,
	supportsPrefix = testSupportsPrefix,
	unsupportedClasses = testUnsupportedClasses,
) => {
	const supported = supportsPrefix ? `${supportsPrefix}-${name}` : name
	const unsupported = unsupportedClasses ? `no-${name}` : false
	const className = test ? supported : unsupported

	if (test || unsupportedClasses) {
		if (className && className.trim()) {
			document.documentElement.classList.add(className)
		}
	}

	// Update global record
	const registryName = name
		.split('-')
		.map((part) => {
			return part.charAt(0).toUpperCase() + part.slice(1)
		})
		.join('') as TestNamesPascal

	if (isClient() && window.supportsCSSTests) {
		window.supportsCSSTests[registryName] = !!test
		window.supportsCSSTests.results = {
			...window.supportsCSSTests.results,
			...{ [name]: !!test },
		}
	}
}

const init = (options: { tests: TestNames[] | 'all' }) => {
	if (isClient() && window.CSS && Object.prototype.hasOwnProperty.call(window.CSS, 'supports')) {
		window.supportsCSSTests = {}
		window.supportsCSSTests.results = {}

		const { tests, supportsPrefix, unsupportedClasses } = {
			...defaults,
			...options,
		}

		testSupportsPrefix = supportsPrefix
		testUnsupportedClasses = unsupportedClasses

		const allTests = Object.is(tests, 'all')

		if (tests.length) {
			testSuite.forEach(({ name, test }) => {
				if (allTests || tests.includes(name)) {
					addTest(name, test, supportsPrefix, unsupportedClasses)
				}
			})
		}
	}
}

/**
 * @example
 * ```ts
 * // init
 * SupportsCSS.init({
 *      tests: ['at-container', 'at-container-style-properties', 'at-layer', 'has']
 * })
 *
 * // addTest
 * SupportsCSS.addTest("accent-color", CSS.supports("accent-color: red"));
 * ```
 */
const supportCSS = { init, addTest, testEnv } as const

export default supportCSS
