import { dayjs } from '@repo/utils'
import { useDatePickerContext } from './context/useDatePickerContext'

interface TodayButtonProps {
	text: string
}

export const TodayButton = ({ text }: TodayButtonProps) => {
	const { handleDate } = useDatePickerContext()

	const handleClick = () => {
		handleDate(dayjs().toDate())
	}

	return (
		<button type="button" onClick={handleClick}>
			{text}
		</button>
	)
}
