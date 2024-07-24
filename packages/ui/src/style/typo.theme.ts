import { css } from '@emotion/react'

const typo = {
	headline: {
		lv1_28bd: css`
			font-size: 28px;
			font-weight: 700;
		`,
		lv2_26bd: css`
			font-size: 26px;
			font-weight: 700;
		`,
		lv3_20bd: css`
			font-size: 20px;
			font-weight: 700;
		`,
		lv3_20md: css`
			font-size: 20px;
			font-weight: 500;
		`,
	},
	title: {
		lv1_18bd: css`
			font-size: 18px;
			font-weight: 700;
		`,
		lv1_18md: css`
			font-size: 18px;
			font-weight: 500;
		`,
		lv2_16bd: css`
			font-size: 16px;
			font-weight: 700;
		`,
		lv2_16md: css`
			font-size: 16px;
			font-weight: 500;
		`,
		lv3_15bd: css`
			font-size: 15px;
			font-weight: 700;
		`,
		lv3_15md: css`
			font-size: 15px;
			font-weight: 500;
		`,
		lv4_14bd: css`
			font-size: 14px;
			font-weight: 700;
		`,
		lv4_14md: css`
			font-size: 14px;
			font-weight: 500;
		`,
		lv5_12md: css`
			font-size: 12px;
			font-weight: 500;
		`,
	},
	body: {
		lv1_16rg: css`
			font-size: 16px;
			font-weight: 400;
		`,
		lv2_15rg: css`
			font-size: 15px;
			font-weight: 400;
		`,
		lv3_14rg: css`
			font-size: 14px;
			font-weight: 400;
		`,
		lv4_13rg: css`
			font-size: 13px;
			font-weight: 400;
		`,
		lv5_12rg: css`
			font-size: 12px;
			font-weight: 400;
		`,
	},
} as const

export default typo
