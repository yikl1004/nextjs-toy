// 0: "off"
// 1: "warn"
// 2: "error"

module.exports = {
    settings: {
        'import/resolver': 'node',
    },
    env: {
        // 전역객체를 eslint가 인식하는 구간
        browser: true, // document나 window 인식되게 함
        node: true,
        es6: true,
        worker: true,
        jest: true,
    },
    // eslint 미적용될 폴더나 파일 명시
    ignorePatterns: ['.next/', 'node_modules/', '.public'],
    extends: [
        'next/core-web-vitals',
        // 'plugin:testing-library/react',
        // 'plugin:jest-dom/recommended',
    ],
    overrides: [
        {
            files: [
                'src/app/page.[jt]s?(x)',
                'src/app/**/page.[jt]s?(x)',
                'src/app/layout.[jt]s?(x)',
                'src/app/**/layout.[jt]s?(x)',
            ],
            rules: {
                'react-refresh/only-export-components': 'off',
            },
        },
    ],
};
