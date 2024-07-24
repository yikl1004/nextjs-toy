import { Alignment, Box, Spacer, TabGroup, Title } from '@repo/ui'
import { Suspense } from 'react'
import { SegmentDetect } from 'src/components/SegmentDetect'

export default function Page() {
	const items = [
		{ text: 'Dayjs', slug: 'dayjs' },
		{ text: 'Datepicker', slug: 'datepicker' },
	]

	return (
		<Spacer vertical={9}>
			<Alignment flex justifyContent="space-between">
				<Suspense>
					<SegmentDetect
						component={TabGroup}
						path="/app-playground/dev-testing/date"
						items={items}
					/>
				</Suspense>
				<Box alignSelf="flex-start" />
			</Alignment>
			<Box>
				<Title>메뉴를 선택하세요.</Title>
			</Box>
		</Spacer>
	)
}
