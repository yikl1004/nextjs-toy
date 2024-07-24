module.exports = {
    plugins: ['react', 'react-refresh', 'jsx-a11y'],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@tanstack/eslint-plugin-query/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: [
                '**/__tests__/**/*.[jt]s?(x)',
                '**/?(*.)+(spec|test).[jt]s?(x)',
            ],
            extends: ['plugin:testing-library/react'],
            rules: {
                'react-refresh/only-export-components': 'off',
            },
        },
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        // <img> 엘리먼트에 유의미한 대체 텍스트가 있는지 체크
        'jsx-a11y/alt-text': [
            'warn',
            {
                elements: ['img'],
            },
        ],
        // 유효한 aria-* 속성만 사용
        'jsx-a11y/aria-props': 'warn',
        // 유효한 aria-* 상태/값만 사용
        'jsx-a11y/aria-proptypes': 'warn',
        // DOM에서 지원되는 role, ARIA만 사용
        'jsx-a11y/aria-unsupported-elements': 'warn',
        // 필수 ARIA 속성이 빠져있는지 체크
        'jsx-a11y/role-has-required-aria-props': 'warn',
        // ARIA 속성은 지원되는 role에서만 사용
        'jsx-a11y/role-supports-aria-props': 'warn',
        // DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)
        'react/no-unknown-property': 'off',
        // 정의한 props 중에 빠진게 있는지 체크 (NextPage 등 일부 추상화 컴포넌트에서 복잡해지므로 기본은 off)
        'react/prop-types': 'off',
        // react 17부터 import 하지 않아도 자동적용
        'react/react-in-jsx-scope': 'off',
        // jsx iteratee에서 key prop 누락 체크
        'react/jsx-key': 'error',
        // 경고표시, 파일 확장자를 .ts나 .tsx 모두 허용함
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.ts', '.tsx'] },
        ],
        // export default 강제하지 않음
        'import/prefer-default-export': 'off',
        // 함수형 컴포넌트 사용으로 defaultProps 사용하지 않음
        'react/require-default-props': 'off',
        // component 함수 작성법 제한
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['arrow-function', 'function-declaration'],
            },
        ],
        // typescript 사용으로 prop-types 검사는 사용하지 않음
        'react/prop-types': 'off',
        // JSX의 closing braket의 위치를 정렬된 위치로 설정
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        // 공통 컴포넌트의 props가 많을 경우 spread를 사용해 코드 단축을 이용할 수 있으므로 사용을 허용으로 설정
        // "react/jsx-props-no-spreading": [
        // 	"error",
        // 	{
        // 		"html": "ignore",
        // 		"custom": "ignore"
        // 	}
        // ]
    },
};
