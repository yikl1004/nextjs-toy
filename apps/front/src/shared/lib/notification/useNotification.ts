'use client'

import { useCallback, useState } from 'react'
import { enqueueSnackbar, closeSnackbar } from 'notistack'

interface UseNotification {
	(props?: { defaultMessage: string }): {
		notify: (message?: string) => void
		closeNotify: () => void
	}
}

export const useNotification: UseNotification = (props) => {
	const [key, setKey] = useState<string | number | null>(null)

	const notify = useCallback(
		(message?: string) => {
			const msg = props?.defaultMessage || message || 'no messages...'
			const notifyKey = enqueueSnackbar(msg, {
				variant: 'normal',
			})

			setKey(notifyKey)
		},
		[props?.defaultMessage],
	)

	const closeNotify = useCallback(() => {
		if (key) {
			closeSnackbar(key)
		}
	}, [key])

	return { closeNotify, notify }
}
