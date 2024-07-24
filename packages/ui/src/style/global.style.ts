import { css } from '@emotion/react'

/**
 * @description normalize
 */
export const globalStyleCSSText = css`
	/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

	*,
	::before,
	::after {
		box-sizing: border-box; /* 1 */
		border-width: 0; /* 2 */
		border-style: solid; /* 2 */
		border-color: #e4e4e7; /* 2 */
	}

	html {
		line-height: 1.5; /* 1 */
		-webkit-text-size-adjust: 100%; /* 2 */
		-moz-tab-size: 4; /* 3 */
		-o-tab-size: 4;
		tab-size: 4; /* 3 */
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			'Noto Sans',
			sans-serif,
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji'; /* 4 */
		font-feature-settings: normal; /* 5 */
		font-variation-settings: normal; /* 6 */
	}

	body {
		margin: 0; /* 1 */
		line-height: inherit; /* 2 */
	}

	hr {
		height: 0; /* 1 */
		color: inherit; /* 2 */
		border-top-width: 1px; /* 3 */
	}

	abbr:where([title]) {
		-webkit-text-decoration: underline dotted;
		text-decoration: underline dotted;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: inherit;
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}

	b,
	strong {
		font-weight: bolder;
	}

	code,
	kbd,
	samp,
	pre {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
			'Courier New', monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	table {
		text-indent: 0; /* 1 */
		border-color: inherit; /* 2 */
		border-collapse: collapse; /* 3 */
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit; /* 1 */
		font-size: 100%; /* 1 */
		font-weight: inherit; /* 1 */
		line-height: inherit; /* 1 */
		color: inherit; /* 1 */
		margin: 0; /* 2 */
		padding: 0; /* 3 */
	}

	button,
	select {
		text-transform: none;
	}

	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		appearance: button; /* 1 */
		background-color: transparent; /* 2 */
		background-image: none; /* 2 */
	}

	:-moz-focusring {
		outline: auto;
	}

	:-moz-ui-invalid {
		box-shadow: none;
	}

	progress {
		vertical-align: baseline;
	}

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		height: auto;
	}

	[type='search'] {
		appearance: textfield; /* 1 */
		outline-offset: -2px; /* 2 */
	}

	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button; /* 1 */
		font: inherit; /* 2 */
	}

	summary {
		display: list-item;
	}

	blockquote,
	dl,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	figure,
	p,
	pre {
		margin: 0;
	}

	fieldset {
		margin: 0;
		padding: 0;
	}

	legend {
		padding: 0;
	}

	ol,
	ul,
	menu {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	textarea {
		resize: vertical;
	}

	input::-moz-placeholder,
	textarea::-moz-placeholder {
		opacity: 1; /* 1 */
		color: #a1a1aa; /* 2 */
	}

	input::placeholder,
	textarea::placeholder {
		opacity: 1; /* 1 */
		color: #a1a1aa; /* 2 */
	}

	button,
	[role='button'] {
		cursor: pointer;
	}

	:disabled {
		cursor: default;
	}

	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block; /* 1 */
	}
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		vertical-align: middle; /* 2 */
	}

	img,
	video {
		max-width: 100%;
		height: auto;
	}

	[hidden] {
		display: none;
	}

	[type='text'],
	[type='email'],
	[type='url'],
	[type='password'],
	[type='number'],
	[type='date'],
	[type='datetime-local'],
	[type='month'],
	[type='search'],
	[type='tel'],
	[type='time'],
	[type='week'],
	[multiple],
	textarea,
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: #fff;
		border-color: #71717a;
		border-width: 1px;
		border-radius: 0px;
		padding-top: 0.5rem;
		padding-right: 0.75rem;
		padding-bottom: 0.5rem;
		padding-left: 0.75rem;
		font-size: 1rem;
		line-height: 1.5rem;
	}

	[type='text']:focus,
	[type='email']:focus,
	[type='url']:focus,
	[type='password']:focus,
	[type='number']:focus,
	[type='date']:focus,
	[type='datetime-local']:focus,
	[type='month']:focus,
	[type='search']:focus,
	[type='tel']:focus,
	[type='time']:focus,
	[type='week']:focus,
	[multiple]:focus,
	textarea:focus,
	select:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		--tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: #2563eb;
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
		border-color: #2563eb;
	}

	input::-moz-placeholder,
	textarea::-moz-placeholder {
		color: #71717a;
		opacity: 1;
	}

	input::placeholder,
	textarea::placeholder {
		color: #71717a;
		opacity: 1;
	}

	::-webkit-datetime-edit-fields-wrapper {
		padding: 0;
	}

	::-webkit-date-and-time-value {
		min-height: 1.5em;
	}

	::-webkit-datetime-edit,
	::-webkit-datetime-edit-year-field,
	::-webkit-datetime-edit-month-field,
	::-webkit-datetime-edit-day-field,
	::-webkit-datetime-edit-hour-field,
	::-webkit-datetime-edit-minute-field,
	::-webkit-datetime-edit-second-field,
	::-webkit-datetime-edit-millisecond-field,
	::-webkit-datetime-edit-meridiem-field {
		padding-top: 0;
		padding-bottom: 0;
	}

	select {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2371717a' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
		background-position: right 0.5rem center;
		background-repeat: no-repeat;
		background-size: 1.5em 1.5em;
		padding-right: 2.5rem;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}

	[multiple] {
		background-image: initial;
		background-position: initial;
		background-repeat: unset;
		background-size: initial;
		padding-right: 0.75rem;
		-webkit-print-color-adjust: unset;
		print-color-adjust: unset;
	}

	[type='checkbox'],
	[type='radio'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		padding: 0;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
		display: inline-block;
		vertical-align: middle;
		background-origin: border-box;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		flex-shrink: 0;
		height: 1rem;
		width: 1rem;
		color: #2563eb;
		background-color: #fff;
		border-color: #71717a;
		border-width: 1px;
		--tw-shadow: 0 0 #0000;
	}

	[type='checkbox'] {
		border-radius: 0px;
	}

	[type='radio'] {
		border-radius: 100%;
	}

	[type='checkbox']:focus,
	[type='radio']:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		--tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
		--tw-ring-offset-width: 2px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: #2563eb;
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
	}

	[type='checkbox']:checked,
	[type='radio']:checked {
		border-color: transparent;
		background-color: currentColor;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	[type='checkbox']:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
	}

	[type='radio']:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
	}

	[type='checkbox']:checked:hover,
	[type='checkbox']:checked:focus,
	[type='radio']:checked:hover,
	[type='radio']:checked:focus {
		border-color: transparent;
		background-color: currentColor;
	}

	[type='checkbox']:indeterminate {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
		border-color: transparent;
		background-color: currentColor;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	[type='checkbox']:indeterminate:hover,
	[type='checkbox']:indeterminate:focus {
		border-color: transparent;
		background-color: currentColor;
	}

	[type='file'] {
		background: unset;
		border-color: inherit;
		border-width: 0;
		border-radius: 0;
		padding: 0;
		font-size: unset;
		line-height: inherit;
	}

	[type='file']:focus {
		outline: 1px solid ButtonText;
		outline: 1px auto -webkit-focus-ring-color;
	}

	*,
	::before,
	::after {
		--tw-border-spacing-x: 0;
		--tw-border-spacing-y: 0;
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-pan-x:  ;
		--tw-pan-y:  ;
		--tw-pinch-zoom:  ;
		--tw-scroll-snap-strictness: proximity;
		--tw-ordinal:  ;
		--tw-slashed-zero:  ;
		--tw-numeric-figure:  ;
		--tw-numeric-spacing:  ;
		--tw-numeric-fraction:  ;
		--tw-ring-inset:  ;
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgb(59 130 246 / 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		--tw-blur:  ;
		--tw-brightness:  ;
		--tw-contrast:  ;
		--tw-grayscale:  ;
		--tw-hue-rotate:  ;
		--tw-invert:  ;
		--tw-saturate:  ;
		--tw-sepia:  ;
		--tw-drop-shadow:  ;
		--tw-backdrop-blur:  ;
		--tw-backdrop-brightness:  ;
		--tw-backdrop-contrast:  ;
		--tw-backdrop-grayscale:  ;
		--tw-backdrop-hue-rotate:  ;
		--tw-backdrop-invert:  ;
		--tw-backdrop-opacity:  ;
		--tw-backdrop-saturate:  ;
		--tw-backdrop-sepia:  ;
	}

	::backdrop {
		--tw-border-spacing-x: 0;
		--tw-border-spacing-y: 0;
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-pan-x:  ;
		--tw-pan-y:  ;
		--tw-pinch-zoom:  ;
		--tw-scroll-snap-strictness: proximity;
		--tw-ordinal:  ;
		--tw-slashed-zero:  ;
		--tw-numeric-figure:  ;
		--tw-numeric-spacing:  ;
		--tw-numeric-fraction:  ;
		--tw-ring-inset:  ;
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgb(59 130 246 / 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		--tw-blur:  ;
		--tw-brightness:  ;
		--tw-contrast:  ;
		--tw-grayscale:  ;
		--tw-hue-rotate:  ;
		--tw-invert:  ;
		--tw-saturate:  ;
		--tw-sepia:  ;
		--tw-drop-shadow:  ;
		--tw-backdrop-blur:  ;
		--tw-backdrop-brightness:  ;
		--tw-backdrop-contrast:  ;
		--tw-backdrop-grayscale:  ;
		--tw-backdrop-hue-rotate:  ;
		--tw-backdrop-invert:  ;
		--tw-backdrop-opacity:  ;
		--tw-backdrop-saturate:  ;
		--tw-backdrop-sepia:  ;
	}
`

/**
 * @description object type
 */
export const demoStyle = css`
	body {
		padding-bottom: 9rem;
		background-color: rgb(10, 10, 11);
		overflow-y: scroll;
		margin: 0;
		line-height: inherit;
		color: #ffffff;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
`
