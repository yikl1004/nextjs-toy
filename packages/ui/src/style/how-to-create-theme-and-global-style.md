# Theme, global style 작성

## global style 작성

```ts
// normal type
const globalStyleCSSText = css`
	:root {
		--my-font-size: 10px;
	}

	html {
		font-size: 10px; // CSS Text에서는 px 단위 생략을 가극적 사용하지 않아야 합니다.
		line-height: 1;
	}

	body {
		font-size: var(--my-font-size);
	}
`

// object type
const globalStyleCSSObject = css({
	':root': {
		'--my-color': 'rgb(255, 0, 0)',
	},
	h1: {
		fontWeight: 800,
	},
	p: {
		color: 'var(--my-color)',
	},
})

// combine CSS
export const globalStyle = css([globalStyleCSSObject, globalStyleCSSText])
```

> ⚠ **참고사항**  
> @emotion은 CSS Variables 보다 `theme` 라는 체계를 이용해서 property(property도 사실상 변수)에 재사용 될 값들을 저장한 후 재사용하는 방법을 추천하고 있습니다.  
> CSS Variables를 사용하는 것이 조금 불편할 수는 있습니다만 사용이 안되는 것은 아니고 오작동이나 오류도 없습니다. 다만 JS의 변수 체계가 CSS Variables 체계를 완벽히 대체할 수 있다는 점을 말씀드립니다.
>
> **[추가사항]**
> CSS Variable과 JS의 변수는 당연히 동작 방식에는 차이가 있으나 개발 방법은 서로 대체가 가능하다는 의미 입니다.

## Theme 작성

```ts
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
	// Theme 라는 interface 안에 추가할 속성들을 미리 작성해둡니다.
	// 아래 있는 interface 타입 코드는 값이 아니 타입 입니다.
	export interface Theme {
		mediaQueries: {
			xs: `@media only screen and (min-width : 320px)`
			sm: `@media only screen and (min-width : 480px)`
			md: `@media only screen and (min-width : 768px)`
			lg: `@media only screen and (min-width : 992px)`
			xl: `@media only screen and (min-width : 1200px)`
		}
	}
}

export const breakpoints = { xs: 320, sm: 480, md: 768, lg: 992, xl: 1200 } as const

export const theme: Theme = {
	mediaQueries: {
		xs: `@media only screen and (min-width : ${breakpoints.xs}px)`,
		sm: `@media only screen and (min-width : ${breakpoints.sm}px)`,
		md: `@media only screen and (min-width : ${breakpoints.md}px)`,
		lg: `@media only screen and (min-width : ${breakpoints.lg}px)`,
		xl: `@media only screen and (min-width : ${breakpoints.xl}px)`,
	},
}
```

Theme type interface에 먼저 추가할 속성과 타입을 정의한 후 아래 변수 에서 속성과 값을 선언하는 순서로 작성합니다.
