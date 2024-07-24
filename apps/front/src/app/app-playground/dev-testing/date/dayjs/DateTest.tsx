import { Box, Spacer, Title } from '@repo/ui'
import { dayjs, getRelativeTime } from '@repo/utils'

export const DateTest = () => {
	const current = dayjs()
	const dummyDates = {
		lessThan59Seconds: current.subtract(20, 'seconds'),
		lessThan59Minutes: current.subtract(51, 'minutes'),
		below23Hours: current.subtract(23, 'hours'),
		below2Days: current.subtract(2, 'days'),
		more3Days: current.subtract(3, 'days'),
	}

	return (
		<Spacer vertical={3}>
			<Box as="section">
				<p>current : {current.format('YYYY-MM-DD HH:mm:ss')}</p>
			</Box>
			<Box as="section">
				<Title>~59초 : 1분 미만</Title>
				<p>relative : {dummyDates.lessThan59Seconds.format('YYYY-MM-DD HH:mm:ss')}</p>
				<p>relative text : {getRelativeTime(dummyDates.lessThan59Seconds)}</p>
			</Box>
			<Box as="section">
				<Title>~59분 : N분 전</Title>
				<p>relative : {dummyDates.lessThan59Minutes.format('YYYY-MM-DD HH:mm:ss')}</p>
				<p>relative text : {getRelativeTime(dummyDates.lessThan59Minutes)}</p>
			</Box>
			<Box as="section">
				<Title>~23시간 : N시간 전</Title>
				<p>relative : {dummyDates.below23Hours.format('YYYY-MM-DD HH:mm:ss')}</p>
				<p>relative text : {getRelativeTime(dummyDates.below23Hours)}</p>
			</Box>
			<Box as="section">
				<Title>~2일 : N일 전</Title>
				<p>relative : {dummyDates.below2Days.format('YYYY-MM-DD HH:mm:ss')}</p>
				<p>relative text : {getRelativeTime(dummyDates.below2Days)}</p>
			</Box>
			<Box as="section">
				<Title>3일 이상: YYYY.MM.DD</Title>
				<p>relative : {dummyDates.more3Days.format('YYYY-MM-DD HH:mm:ss')}</p>
				<p>relative text : {getRelativeTime(dummyDates.more3Days)}</p>
			</Box>
		</Spacer>
	)
}
