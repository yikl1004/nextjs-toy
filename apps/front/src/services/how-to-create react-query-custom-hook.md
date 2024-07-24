# react-query를 사용하여 custom hook 만들기

> [react-query에 관한 참고자료](https://velog.io/@mjieun/Next.js-React-Query-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-with-SSRSSG)

## 1. queryKey 만들기

> react-query에서 queryKey는 굉장히 특별하게 다뤄집니다. 캐싱처리를 하는 기준으로 삼고있어서 queryKey를 잘활용하면 react-query가 제공하는 캐싱기능을 자연스럽게 누릴수 있습니다.  
> queryFn은 useQuery hook에서 호출되는 비동기 콜백 함수로 별도의 매개변수를 임의로 지정할 수 없고 정해져 있는 매개변수를 활용해야 합니다.  
> 비동기 콜백함수(queryFn)은 주입받은 매개변수의 property중 queryKey를 받아올수 있고 이것을 활용해 parameter를 넘겨 줄수 있습니다.

### case 1) queryKey를 생성하는 generate함수

queryKey를 parameter로 넘겨주는 처리를 하는 경우

```ts
type Params = {
	a: number
}

// 함수명은 queryKey와 함수를 의미하는 접미사 격으로 Fn을 같이 사용합니다. 반드시 `as const`로 assertion을 해주어 readonly 타입으로 추론되게 해야 합니다.
export const queryKeyFn = (paramsKey: Params | null) => ['@menu/categories', paramsKey] as const

// 함수인 경우 ts utility 타입인 ReturnType을 활용해 함수의 리턴값의 타입을 알 수 있으므로 이것을 이용해 queryKey의 타입을 추출해서 선언할 수 있습니다.
type QueryKey = ReturnType<typeof queryKeyFn>
```

### case 2) queryKey를 지정하여 사용

```ts
export const queryKey = ['@menu/categories'] as const

type QueryKey = typeof queryKey
```

## query function 만들기

```ts
// 생성된 axios instance
import { http } from '@/utils/http'
// react-query의 QueryFunction 타입
import type { QueryFunction } from '@tanstack/react-query'

// response 될 json의 타입
type Item = {
	name: string
	id: number
	quantity: number
	description: string
	price: number
	createdAt: string
}

// query function
const getItems: QueryFunction<Item[], QueryKey> = async ({ queryKey }) => {
	// queryKey 0번째 아이템은 주로 문자열로된 캐싱(또는 인식)을 위한 key로 사용, string
	// parameter가 있는 경우 배열의 1번째에 리터럴 객체 형태로 저장하므로 1번째 객체를 꺼낸다.
	const [, params] = queryKey

	// fetch 처리...
	// axios는 response된 json을 axios response 객체로 래핑해서 내보내주기 때문에 실제 json은 data 프로퍼티에 담겨 있으므로 꺼내서 리턴해 준다
	const { data } = await http.get('/api/v1/product/items', { params })

	return data
}
```

## custom hook 만들기

queryKey와 queryFn이 준비 됬으면 이제 커스텀 훅을 만들어 컴포넌트에서 사용할수 있게 하는 과정을 처리합니다.
여기서 개발자가 결정할 사항은 상황에 따라 함수명을 달리 사용해야 하는데 케이스는 다음과 같다.

**useQuery를 사용하는 경우 `use{name}Query`**
**useSuspenseQuery를 사용하는 경우 `use{name}SuspenseQuery`**

```ts
const useItemsQuery = (props) => {
 // case 1) useQuery
 const { data, ...rest } = useItemsQuery({
  queryKey,
  queryFn: getItems,
  enabled: !!props.any,   // optional
        suspense: true          // optional
        throwOnError:           // optional
        placeholderData: {}     // optional
 })

    // case 2) useSuspenseQuery
    const { data, ...rest } = useItemsSuspenseQuery({
        queryKey,
        queryFn: getItems,
        // useSuspenseQuery는 아래 옵션은 사용할 수 없습니다.
        enabled: !!props.any,
        suspense: true
        throwOnError:
        placeholderData: {}
    })

    /**
     * @see https://tanstack.com/query/latest/docs/react/reference/useSuspenseQuery
     * @description
     * useQuery와 useSuspense의 차이점
     * 1. return되는 data를 보장 받습니다.
     * 2. isPlaceholderData는 사용되지 않습니다.
     * 3. status는 항상 'success' 임을 보장받습니다.
     */

 return { data, ...rest }
}
```
