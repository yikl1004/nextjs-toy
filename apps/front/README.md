# Front-end for Next.js 14

## TODOs

- [x] yarn berry 설정, 관련 가이드 업데이트
- [x] react-query 설치 및 세팅완료
- [x] storybook 설치 완료
- [ ] storybook 가이드 작성
- [x] husky 설치 및 세팅
- [x] emotion(styled-component) 설치 및 세팅 완료
- [x] typescript, eslint, prettier 기본 설정 완료
- [x] global type 정의
- [x] reac-testing-library 세팅
- [x] fetch & react-query를 활용한 컴포넌트 작성 가이드(<https://velog.io/@wildcatco/%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%8C%A8%EC%B9%AD%EC%9D%98-%EB%A1%9C%EB%94%A9-%EC%97%90%EB%9F%AC-%EC%83%81%ED%83%9C-%EB%B6%84%EB%A6%AC%ED%95%98%EA%B8%B0-with-Tanstack-Query-Suspense-Error-Boundary>)
- [ ] cookie state 사용: 상위 Server컴포넌트에서 `react-query`의 `<HydrationBoundary/>`를 통해 `dehydratedState`를 전달해 Client Component에서 useQuery를 이용해 사용 할 수 있도록 구현

## 프로젝트 생성

```sh
npx create-next-app@latest
```

## yarn berry 설정

```sh
# 1. 최신버전의 yarn berry 사용 설정
yarn set version stable

# 2. yarn 패키지 설치
yarn

# 2-1. package.json에 "packageManager": "yarn@4.0.2" 가 추가 됬는자 확인

# 2-2. 추가 되어 있지 않다면 yarn version 확인(프로젝트 폴더 경로에서) 후 "packageManager" 필드에 버전 명 추가
yarn --version

# pnp 로더를 이용하기 위해
echo 'nodeLinker: "pnp"' >> .yarnrc.yml

# 전역 cache를 사용하지 않는 것으로 설정
echo 'enableGlobalCache: false' >> .yarnrc.yml

# typescript, eslint, prettier 검증 로컬 서버를 위한 yarn berry의 vscode 세팅
yarn dlx @yarnpkg/sdks vscode

# 개발모드로 띄워보기
yarn dev

```

ts 또는 tsx 파일 하나를 열고  
`ctrl(cmd)` + `shift` + `p`를 누르고  
"typescriot version"을 검색 후
"typescript 버전 선택"을 선택
"작업영역 버전" 선택
열었던 ts 또는 tsx 파일에서 에러가 있는지 눈으로 확인

> [.yarnrc.yml 자세히 알아보기](https://yarnpkg.com/configuration/yarnrc)

## Zero-install 사용하기

아래 내용을 `.gitignore`에 추가하면 `/.yarn/cache`폴더의 의존성 모듈을 전부 푸시 하기 때문에 git clone 시 좀더 빠른 설치 가능

```txt
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

> [zero install 설정 자세히 보기](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

## github 이용 시 large file에 대한 문제

> github은 한파일당 100mb의 용량 제한이 있고 50mb 이하라는 권고사항이 있고 이와 같은 이슈로 git-lfs 사용을 권장함.  
> [git-lfs](https://git-lfs.com):link:

해결 과정

1. git-lfs 설치 `brew install git-lfs`
2. 프로젝트 경로에서 `git lfs install` - 설치(git hooks 생성)라는 개념보다는 사용하겠다는 의미가 더 강함
3. 해당되는 파일의 git cache를 삭제 `git rm --cached {{file_path}}`
4. 삭제한 파일의 git-lfs 등록 `git lfs track {{file_path}}`
5. `.gitattributes` 파일이 생성. 파일을 열어 잘 등록됬는지 확인
6. git cli를 통해 add, commit, push 절차를 수행하여 정상수행 되는지 확인
   - 절차 과정 중 `Uploading LFS objects ...` 라는 진행 메세지가 터미널에 출력되면 정상 동작으로 간주

## prettier - code formatter

```sh
# 설치
yarn add -D prettier

# yarn sdk 다시 적용
yarn dlx @yarnpkg/sdks vscode

# formating에 어긋나게 문법을 수정한 후 prettier 테스트
yarn dlx prettier --write {filename or directory}
```

## next.config.js 관련 오류 수정

next.config.js 에서 eslint, tsconfig 관련 parsing error가 있을 경우
`next.config.js` 를 `include` 항목에 추가

```json
// tsconfig.json
{
 "include": [..., "./next.config.js"]
}
```

## MacOS 와 Windows 간 개행문자 차이로 인한 git 설정

### Windows

윈도에서는 CRLF 를 사용하므로 저장소에서 가져올 때 LF 를 CRLF 로 변경하고 저장소로 보낼 때는 CRLF 를 LF 로 변경하도록 `true` 로 설정

```sh
git config --global core.autocrlf true
```

### MacOS, Linux, Unix 계열

리눅스, 맥, 유닉스는 LF 만 사용하므로 input 으로 설정한다.

```sh
git config --global core.autocrlf input
```

## MSW + SSL 사용 시 Chrome/Brave/Firefox 브라우저 설정 변경

> Reference: <https://mswjs.io/docs/recipes/using-local-https/#chrome--brave>

## Hooks

util로 사용할 hook을 추가하는 경우

> [use hooks](https://usehooks.com)에서 구현하려고 하는 hook이 있다면 복사해서 개별 적으로 추가

- 이외 다른 경우 직접 만들어 사용
- `use client` 디렉티브 반드시 추가

## usePathname, useSearchParams 사용시 주의사항

> 이 2개의 hook은 실행될 때 상위 컴포넌트 중 가장 가까운 Suspense를 찾습니다. 왜 찾는지는 모르겠지만 이와같은 문제로 2개의 hook을 사용 할때는 반드시 상위 컴포넌트에서 `<Suspense />`로 래핑해 줘야 예상하지 못한 에러를 방지 할 수 있습니다.  
> 참고: `fallback` props은 `null`로 지정합니다.

## RSC 사용 시 Compound component 사용 불가

Server Component의 직렬화 과정에서 Component type 파악이 어려워져 사용이 어렵습니다.
사용하려면 Compound component를 사용하는 RSC를 `use client`를 이용한 client component로 변경 후 사용할 수 있습니다.  
해당 프로젝트에서는 이 규칙을 사용하지 않기로 했습니다.

> 단, named export는 가능

## `next/dynamic`을 사용할 떄 주의할 점

> dynamic 함수를 사용하는 파일에서 반드시 `use client` 디렉티브를 추가해야 합니다. 추가 하지 않으면 빌드시 code splitting이 제대로 수행되지 않습니다.

## MSW 관련 이슈

서버 컴포넌트 기반인 Next.js App router와는 동작 방식이 상충되는 부분이 있다고 합니다.  
첫 번째로 MSW는 어플리케이션의 어느 위치에서든 모듈 patching을 전달해 줄 수 있는 프로세스가 필요한데 보통 다른 페이지들의 최상위에서 작동하는 root layout이 이 역할을 합니다. Next.js는 root layout과 페이지의 프로세스가 완전히 분리되어 있어 한 프로세스에서의 patching이 다른 프로세스에 영향을 미치지 못합니다.  
두 번째로 Next.js의 페이지 기반 프로세스는 계속 무작위 포트에서 생겨나고 사라지는 방식이라서 MSW가 모든 포트를 커버하긴 어렵습니다.

> 해당 Issue 글에 유저들이 여러 우회법을 제시하고 있지만 불안정한 방법이고 공식적으론 Next.js 팀과의 협업을 준비하고 있다고 합니다. MSW를 계속 사용할 거라면 추이를 지켜보고 업데이트 방향을 결정할 필요가 있습니다.

실제로 테스트 해보았을 때도 Client Component에선 Mocking이 정상적으로 작동했지만 Server Component에선 동작하지 않았습니다.

> 우회법을 잘 골라서 사용하면 문제를 당장은 해결할 수 있을 것 같습니다. 다만 우회법을 고르고 세팅해서 실험하는데 과한 노력이 들어갈 것 같다는 우려와 추후 Next.js의 기능과 충돌할 수 있다는 우려로 인해 별도의 커스텀 mock server를 express를 이용해 가볍게 구현했습니다.(handler 함수는 동일하게 사용)

추가로 mock server 실행 전 아래 명령어를 실행해 주어야 잘 동작합니다.

```sh
yarn unplug express
```

## Folder Structure

TODO: 설명 추가 예정

- @components
- @providers
- @hooks
- @lib
- @utils
- @ui
- @page
- @mocks
- @services
- @store
- @providers: ./src/providers/index.tsx
- @app/image: ./src/shared/components/common/Image.tsx

## Cookie / LocalStorage 사용시 주의사항

### Cookie

`next/headers`의 `cookies()`함수를 사용

- Server Component: cookies().get(key)
- Client Component case 1: 상위 Server컴포넌트에서 props drilling으로 전달 받음
- Client Component case 2: 상위 Server컴포넌트에서 `react-query`의 `<HydrationBoundary/>`를 통해 `dehydratedState`를 전달해 Client Component에서 useQuery를 이용해 사용 할 수 있음(아직 구현 전)

### LocalStorage

- Client Component 에서만 사용되며 `useLocalStorage` hook을 사용

## (resolve)eslint 중 prettier 검증시 `synckit`에서 dependency를 찾지 못하는 오류

`eslint-plugin-prettier`은 내부적으로 synckit을 사용, `synckit`은 worker_threads를 사용하여 Node.js에서 비동기 작업을 동기적으로 수행하는 라이브러리.
`eslint-plugin-prettier@5` 가 yarn pnp 모드를 지원하는 않는 것으로 추측(`node-modules` 모드에선 이상없이 동작)
현재로선 해결방법으로 2가지를 생각해 볼수 있습니다.

1. 고의 적으로 prettier와 eslint-plugin-prettier의 버전을 아래와 같이 다운그레이드 하여 사용하는 방법(추후 해당패키지의 업데이트에 따라 CHANGELOG를 참고하여 업데이트여부를 결정)
2. `.eslintrc`에서 prettier plugin 관련 설정은 제거하고(config는 정상 동작) prettier를 별도로 실행하여 코드포메팅을 유지하는 방법

> synckit을 적용하기 전 버전
> "eslint-plugin-prettier": "4.2.1"
> "prettier": "2.8.8"

> 현재는 husky + lint-staged를 통해 lint를 수행하고 있습니다.  
> lifecycle: git commit -> lint-staged 실행 -> 1. prettier 2. eslint(next lint) -> 성공 시 commit 완료, 실패 시 commit 반려

> 이 오류는 결과적으로 `console ninja`라는 vscode의 플러그인을 사용하고 있는 vscode에서 yarn berry를 사용할 때 발생하는 에러입니다.  
> console ninja는 프로젝트에서 사용되는 패키지매니저를 감시 해당 패키지 매니저의 전역 설정에 plugin.js를 추가 하는데 이 plugin.js는 require 과정을 간섭합니다. 그과정에서 path가 서로 맞지 않게 되어 패키지를 로드하는 과정에서 오류를 발생시킵니다.
>
> 해결방법은 프로젝트의 `.yarnrc.yml` 설정 파일에서 `plugins` 항몫을 빈값으로 추가해주면 됩니다.(설정 파일의 우선순위가 전역 설정보다 프로젝트 설정이 우선하므로 오버라이드 됨))

```yml
# /.yarnrc.yml

# 이렇게 빈값으로 선언해 놓으면 이 설정이 우선 적용
plugin:
```

> 이 방법으로 해결되지 않을 경우 `~/.yarnrc.yml`을 삭제

## 의존성 관리 기록

**삭제예정**

- **@dinero.js/currencies** - for example
- **dinero.js** - for example
- **date-fns** - dayjs로 변경
- **phosphor-react** - for example

**추가예정**

- ua-parser-js - Detect device for universal(Node.js/Client)
- dayjs - Date management

## Reference

- [media query](https://uxkm.io/publishing/css/03-cssMiddleclass/09-css_media_part2#gsc.tab=0)
- [formatting 규칙이 ESLint에서 사라집니다](https://velog.io/@typo/deprecation-of-formatting-rules)
- [emotion vs styled-component](https://github.com/jsjoeio/styled-components-vs-emotion)
- [detect body scroll](https://codepen.io/geoffgraham/pen/LogERe)
- [PX to REM Converter](https://nekocalc.com/px-to-rem-converter)
- [hooks utility](https://usehooks.com)

## 변경사항

- [x] pnpm으로 변경
