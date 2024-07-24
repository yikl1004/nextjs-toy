'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { SelectableButton, Alignment, Box, Label } from '@repo/ui'

export const Client = ({
	options,
}: {
	options: {
		name: string
		value: string
		items: string[]
	}[]
}) => {
	const searchParams = useSearchParams()!
	const pathname = usePathname()
	const router = useRouter()

	const selectedOptions = useMemo<URLSearchParams>(() => {
		// Get the initial selected options from the URL's searchParams
		const params = new URLSearchParams(searchParams)

		// Preselect the first value of each option if its not
		// included in the current searchParams
		options.forEach((option) => {
			if (!searchParams.has(option.value)) {
				params.set(option.value, option.items[0])
			}
		})

		return params
	}, [searchParams, options])

	const updateSearchParam = useCallback(
		(name: string, value: string) => {
			// Merge the current searchParams with the new param set
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			// Perform a new navigation to the updated URL. The current `page.js` will
			// receive a new `searchParams` prop with the updated values.
			router.push(`${pathname}?${params.toString()}`) // or router.replace()
		},
		[router, pathname, searchParams],
	)

	return (
		<Alignment flex alignItems="center" gap={6}>
			{options.map((option) => (
				<Box display="block" key={option.name}>
					<Label>{option.name}</Label>
					<Alignment flex gap={2} mt={1} className="mt-1 flex gap-2">
						{option.items.map((item) => {
							const isActive = Object.is(selectedOptions.get(option.value), item)

							return (
								<SelectableButton
									key={item}
									active={isActive}
									onClick={() => updateSearchParam(option.value, item)}
								>
									{item}
								</SelectableButton>
							)
						})}
					</Alignment>
				</Box>
			))}
		</Alignment>
	)
}
