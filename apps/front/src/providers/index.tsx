import { isDevelopment } from '@repo/utils'
import { NotificationProvider } from '@lib/notification'
import { RootStyleRegistry, RootStyleRegistryProps } from './RootStyleRegistry'
import { ReactQueryProvider } from './ReactQueryProvider'
import { RecoilContainer } from './RecoilContainer'
import { MSWRunner } from './MSWRunner'

interface ProvidersProps extends RootStyleRegistryProps, React.PropsWithChildren {}

export function Providers({ children }: ProvidersProps) {
	return (
		<RecoilContainer>
			{isDevelopment() && <MSWRunner />}
			<ReactQueryProvider>
				<RootStyleRegistry>
					<NotificationProvider>{children}</NotificationProvider>
				</RootStyleRegistry>
			</ReactQueryProvider>
		</RecoilContainer>
	)
}
