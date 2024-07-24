import * as React from 'react'

/**
 * TODO v5: 비공개로 전환 고려
 *
 * passes {value} to {ref}
 *
 * 경고: 이 함수는 ref로 전달된 콜백 내에서만 호출해야 합니다.
 * 그렇지 않을 경우, {ref}가 변경되면 이전 {ref}를 정리해야 합니다.
 * 참조: https://github.com/mui/material-ui/issues/13539
 *
 * 내부 컴포넌트의 ref를 공개 API에 노출하면서도 컴포넌트 내부에서 사용하고 싶을 때 유용합니다.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
export const setRef = <T>(
	ref: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
	value: T | null,
): void => {
	if (typeof ref === 'function') {
		ref(value)
	} else if (ref) {
		// eslint-disable-next-line no-param-reassign
		ref.current = value
	}
}
