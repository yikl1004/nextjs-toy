import { isServer } from '@repo/utils'
import { HttpClient } from '@repo/utils/fetch'

const getBaseURL = () => {
	if (isServer()) {
		return process.env.NEXT_PUBLIC_APP_API
	}

	return ''
}

export const request = new HttpClient({
	baseURL: getBaseURL(),
	beforeRequest(url, { setBaseURL, setUrl }) {
		if (url.startsWith('/mock')) {
			setBaseURL(process.env.NEXT_PUBLIC_SITE_URL)
			setUrl(`/api${url}`)
		}

		if (isServer() && url.startsWith('/restapi')) {
			setUrl(url.replace('/restapi', ''))
		}
	},
})
