import { Suspense } from 'react'
import { ListUsers } from '@page/app-playground/hydration-stream-suspense/_component/ListUser'
import { ListUsersPageWrapper } from '@page/app-playground/hydration-stream-suspense/Page.styled'

export const revalidate = 0

export default async function HydrationStreamSuspense() {
	return (
		<ListUsersPageWrapper>
			<Suspense fallback={<p>loading...</p>}>
				<ListUsers />
			</Suspense>
		</ListUsersPageWrapper>
	)
}
