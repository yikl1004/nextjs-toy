'use client'

import { Button } from '@repo/ui'
import { useNotification } from '@lib/notification'

export const NotiButton = () => {
	const { notify, closeNotify } = useNotification()

	const handleNotify = () => {
		notify('Test Message....')
	}

	return (
		<>
			<Button type="button" onClick={handleNotify}>
				open
			</Button>
			<Button type="button" onClick={closeNotify}>
				force close
			</Button>
		</>
	)
}
