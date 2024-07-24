'use client'

import { usePathname, useServerInsertedHTML } from 'next/navigation'
import { useMemo, useState } from 'react'
import { CacheProvider, Global, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { isUndefined } from '@repo/utils'
import { demoStyle, globalStyleCSSText, theme } from '@repo/ui/style'

export type RootStyleRegistryProps = React.PropsWithChildren

export function RootStyleRegistry({ children }: RootStyleRegistryProps) {
	const pathname = usePathname()
	const [isAppPlayground] = useState(() => {
		return !!pathname.startsWith('/app-playground')
	})
	const [{ cache: cached, flush: flushed }] = useState(() => {
		const cache = createCache({ key: 'my' })
		cache.compat = true
		const prevInsert = cache.insert
		let inserted: string[] = []
		cache.insert = (...args) => {
			const serialized = args[1]
			if (isUndefined(cache.inserted[serialized.name])) {
				inserted.push(serialized.name)
			}
			return prevInsert(...args)
		}
		const flush = () => {
			const prevInserted = inserted
			inserted = []
			return prevInserted
		}
		return { cache, flush }
	})

	const styles = useMemo(() => {
		// FIXME: 개발용, 추후에 삭제해 주세요.
		return isAppPlayground ? [globalStyleCSSText, demoStyle] : [globalStyleCSSText]
	}, [isAppPlayground])

	useServerInsertedHTML(() => {
		const names = flushed()
		if (Object.is(names.length, 0)) return null
		let stylesHtml = ''

		names.forEach((name) => {
			stylesHtml += cached.inserted[name]
		})

		return (
			<style
				data-emotion={`${cached.key} ${names.join(' ')}`}
				dangerouslySetInnerHTML={{ __html: stylesHtml }}
			/>
		)
	})

	return (
		<CacheProvider value={cached}>
			<Global styles={styles} key="global-style" />
			{theme && <ThemeProvider theme={theme}>{children}</ThemeProvider>}
		</CacheProvider>
	)
}
