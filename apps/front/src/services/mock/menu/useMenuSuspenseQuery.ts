'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { menuQueryKey } from '.'
import { getMenu } from './getMenu'

export const useMenuSuspenseQuery = () => {
	const { data, ...rest } = useSuspenseQuery({
		queryKey: menuQueryKey,
		queryFn: getMenu,
	})

	return {
		data,
		...rest,
	}
}
