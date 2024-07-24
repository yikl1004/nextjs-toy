import type { QueryFunction } from '@tanstack/react-query'
import { request } from '@services/api'
import type { MenuQueryKey } from '.'

declare module '@repo/utils/fetch' {
	interface AppResponseList {
		'/mock/menu': MenuResponse
	}
}

export interface Item {
	name: string
	slug: string
	description?: string
}

interface Menu {
	name: string
	items: Item[]
}

export type MenuResponse = CommonResponse<Menu[]>

type MenuQueryFunction = QueryFunction<MenuResponse, MenuQueryKey>

export const getMenu: MenuQueryFunction = async () => {
	const data = await request.get('/mock/menu')

	return data
}
