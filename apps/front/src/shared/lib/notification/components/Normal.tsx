import { SnackbarContent, type CustomContentProps } from 'notistack'
import { forwardRef } from 'react'

declare module 'notistack' {
	interface VariantOverrides {
		normal: true
	}
}

interface NormalNotificationProps extends CustomContentProps {}

/**
 * @description `SnackbarContent` => HTMLDivElement
 */

export const NormalNotification = forwardRef<HTMLDivElement, NormalNotificationProps>(
	({ id, message, ...rest }, ref) => {
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<SnackbarContent ref={ref} role="alert" {...rest}>
				{/** 여기에 `message` prop과 함께 custom된 디자인을 만들어주시면 됩니다. */}
				{message}
			</SnackbarContent>
		)
	},
)

NormalNotification.displayName = 'NormalNotification'
