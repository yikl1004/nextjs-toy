/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@repo/eslint-config', '@repo/eslint-config/mixins/react'],
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
}