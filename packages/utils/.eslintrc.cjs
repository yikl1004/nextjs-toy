/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@repo/eslint-config'],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['.eslintrc.cjs'],
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
}
