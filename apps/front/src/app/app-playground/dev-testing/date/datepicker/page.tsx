import { RedirectType, redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { isNull } from '@repo/utils'
import { DatePickerTest } from './DatePickerTest'

interface PageProps {
	searchParams: Record<string, string>
}

export default function Page({ searchParams }: PageProps) {
	const url = new URL(headers().get('x-url') ?? '')
	const search = new URLSearchParams(searchParams)

	if (isNull(search.get('programIdx'))) {
		url.searchParams.set('programIdx', 'PG10000000')
		redirect(url.toString(), RedirectType.replace)
	}

	return <DatePickerTest />
}
