import { resolve } from 'node:path';
import onlyWarn from 'eslint-plugin-only-warn';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const project = resolve(process.cwd(), 'tsconfig.json');

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
    baseDirectory: dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ['**/.*.js', '**/node_modules/', '**/dist/'],
    },
    ...compat.extends(
        'eslint:recommended',
        'eslint-config-turbo',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ),
    {
        plugins: {
            'only-warn': onlyWarn,
            '@typescript-eslint': typescriptEslint,
            prettier,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                React: true,
                JSX: true,
            },

            parser: tsParser,
        },

        settings: {
            'import/resolver': {
                typescript: {
                    project,
                },
            },
        },

        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-key': 'error',

            'react/jsx-filename-extension': [
                'warn',
                {
                    extensions: ['.ts', '.tsx'],
                },
            ],

            'import/prefer-default-export': 'off',
            'react/require-default-props': 'off',
            'import/extensions': ['off'],

            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],

            'react/function-component-definition': [
                'error',
                {
                    namedComponents: ['arrow-function', 'function-declaration'],
                },
            ],

            'react/prop-types': 'off',
            'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        },
    },
    {
        files: ['**/*.js?(x)', '**/*.ts?(x)'],
    },
];
