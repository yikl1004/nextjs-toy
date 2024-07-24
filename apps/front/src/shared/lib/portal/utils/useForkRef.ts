'use client'

import * as React from 'react'
import { setRef } from './setRef'

export const useForkRef = <Instance>(
	...refs: Array<React.Ref<Instance> | undefined>
): React.RefCallback<Instance> | null => {
	/**
	 * 이 훅에 전달된 refs가 변경되고 모두 정의된 경우 새로운 함수를 생성합니다.
	 * 이는 React가 이전 forkRef에 `null`을, 새 forkRef에는 ref를 호출하게 함을 의미합니다. 이러한 동작에서 자연스럽게 정리가 이루어집니다.
	 */
	return React.useMemo(() => {
		if (refs.every((ref) => ref === null)) {
			return null
		}

		return (instance) => {
			refs.forEach((ref) => {
				setRef(ref, instance)
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, refs)
}
