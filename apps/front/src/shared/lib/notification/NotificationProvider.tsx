'use client'

import { SnackbarProvider, type SnackbarProviderProps } from 'notistack'
// import { NormalNotification } from './components/Normal'

type NotificationProviderProps = React.StrictPropsWithChildren<{
	components?: SnackbarProviderProps['Components']
}>

export const NotificationProvider = ({ components, children }: NotificationProviderProps) => {
	return (
		<SnackbarProvider
			anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
			autoHideDuration={3000}
			Components={components}
		>
			{children}
		</SnackbarProvider>
	)
}
