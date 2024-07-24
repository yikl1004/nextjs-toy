import { css } from '@emotion/react'

const vars = {
	ellipsis: (line: number) => css`
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: ${line};
	`,
	a11yHidden: css`
		overflow: hidden;
		position: absolute;
		clip: rect(0, 0, 0, 0);
		clip-path: circle(0);
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		white-space: nowrap;
	`,
} as const

export default vars
