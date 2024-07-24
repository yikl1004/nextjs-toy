import { createPrefetchQuery } from '@services/createPrefetchQuery'
import { getMenu } from './getMenu'

export const menuQueryKey = ['@demo/menu'] as const

export type MenuQueryKey = typeof menuQueryKey

export const menuPrefetchQuery = () => createPrefetchQuery(menuQueryKey, getMenu)
