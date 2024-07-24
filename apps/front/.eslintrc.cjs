require('@repo/eslint-config/patch')

module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'@repo/eslint-config',
		'@repo/eslint-config/mixins/react',
		'@repo/eslint-config/mixins/next',
	],
	parser: '@typescript-eslint/parser',
	settings: {
		react: {
			version: '18.2',
		},
	},
	ignorePatterns: ['.eslintrc.cjs'],
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	rules: {
		// 근거: null일 수 있는 가능성이 존재하는 코드도 null을 사용할 수 없게 만듬, HTMLElement를 셀렉팅할때는 null반환의 가능성이 항상 존재함
		'@rushstack/no-new-null': 'off',
		// 근거: 타입 추론 관점에서 type, interface 문법을 허용, 가독성을 크게 해치지 않는다고 판단
		'@typescript-eslint/consistent-type-definitions': 'off',
		// 근거: NextJS를 사용하고 있으므로
		'react-refresh/only-export-components': 'off',
	},
}
