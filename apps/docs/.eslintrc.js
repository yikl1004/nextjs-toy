/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: [
        '@repo/eslint-config',
        '@repo/eslint-config/mixins/react',
        '@repo/eslint-config/mixins/next',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
    overrides: [
        {
            files: ['./app/layout.tsx'],
            rules: {
                'react-refresh/only-export-components': 'off',
            },
        },
    ],
};
