import { cookies } from 'next/headers'
import { ClientSide } from '@page/app-playground/dev-testing/cookie/ClientSide'
import { ServerSide } from '@page/app-playground/dev-testing/cookie/ServerSide'

export default function Page() {
	const cookie = cookies().getAll()

	return (
		<>
			<ClientSide initialCookies={cookie} />
			<ServerSide />
		</>
	)
}
