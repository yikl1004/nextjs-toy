module.exports = {
    // 필요한 플러그인을 여기에 정의 합니다.
    plugins: ['no-relative-import-paths'],
    extends: [
        // 필수 컨피그를 가져옵니다.
        '@rushstack/eslint-config/profile/web-app',
    ],
    settings: {
        // 공통으로 넣고 싶은 설정이 있으면 추가합니다.
    },
    // 필요한 커스텀 규칙을 여기에 정의 합니다.
    rules: {
        // 근거: 타입 추론으로 충분한 곳에 타이핑을 강요함
        '@rushstack/typedef-var': 'off',
        // 근거: 타입 추론을 지나치게 방해한다고 판단
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': 'off',
        // [
        //     'error',
        //     {
        //         selector: 'variable',
        //         format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        //         leadingUnderscore: 'allow', // 변수명 앞에 밑줄 허용
        //     },
        //     {
        //         selector: 'typeAlias', // 타입선언
        //         format: ['PascalCase'],
        //     },
        //     {
        //         selector: 'memberLike', // Property 멤버
        //         format: null,
        //         custom: {
        //             regex: '^[a-z][a-zA-Z0-9]*$|^/[a-z0-9-/]+$', // URL 패턴, camelCase
        //             match: true,
        //         },
        //     },
        //     {
        //         selector: 'function', // exported function (컴포넌트 명)
        //         format: ['PascalCase'],
        //         modifiers: ['exported'],
        //     },
        //     {
        //         selector: 'function', // function
        //         format: ['camelCase'],
        //     },
        // ],
    },
};
