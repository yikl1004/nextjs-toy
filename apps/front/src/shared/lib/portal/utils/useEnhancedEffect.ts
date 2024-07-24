'use client'

import * as React from 'react'

/**
 * 서버 사이드 렌더링 시 경고를 표시하지 않는 `React.useLayoutEffect`의 버전입니다.
 * 이는 클라이언트 사이드 렌더링에만 필요한 효과에 유용하지만 SSR에는 필요하지 않습니다.
 *
 * 이 훅을 사용하기 전에 https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85 링크를 읽고 귀하의 사용 사례에 적용되지 않는지 확인하세요.
 */
// eslint-disable-next-line @rushstack/typedef-var
export const useEnhancedEffect =
	typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
