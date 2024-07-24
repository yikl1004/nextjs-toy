# Route Segment Config

## revalidate

레이아웃과 페이지의 유효기간을 어떻게 가져갈지 정한다.

-   `false`: "Infinity"를 준것 과 동일하며, 무기한 캐싱된다. 단, 개별적으로 내부 페이지에서 fetch의 캐싱 동작을 오버라이드 하지는 않는다.
-   `0`: 동적 렌더링이 없어도 항상 페이지가 동적으로 렌더링 된다.
-   `number`: 특정 유효시간 (초) 를 정할 수 있다. 60으로 설정할 경우, 60초 마다 페이지가 렌더링 될 것이다.

```ts
export const revalidate = 60 // seconds
// false | 'force-cache' | 0 | number
```

## dynamicParmas

generateStaticParams로 생성되지 않은 파일을 방문했을 때 어떻게 동작할지 결정한다.

-   `true` (default): 해당 페이지 요청이 오면 파일을 생성한다.
-   ✅ `false`: 404를 반환한다. 위에서 만약 force-static나 error를 사용한다면 이 값이 자동으로 false가 된다.

## dynamic

-   `auto` (default): 컴포넌트가 가능하나 동적인 동작을 하지 못하도록 막으며 가능한 캐싱을 많이 하게 한다.
-   `force-dynamic`: 모든 캐싱을 비활성화 하고, 동적 렌더링 및 fetch를 수행한다. 이 옵션은 구 getServerSideProps와 동일하다.
-   ✅ `error`: 동적으로 가져오는 경우 에러를 발생시킨다. 다시 말하면 모든 페이지를 정적으로 렌더링하는 것을 강제한다. 이 옵션은 getStaticProps와 같다.
-   `force-static`: 정적인 렌더링이 강제되고, 레이아웃이나 페이지에서 데이터 요청이 있을 경우 쿠키, 헤더, searchParams의 값이 모두 빈값으로 나온다. fetch된 data에따른 렌더링이 아닌 재배포에 따른 변경사항 적용인 경우 사용할 수 있다.
