import { isServer } from '@repo/utils'
import { HttpClient } from '@repo/utils/fetch'

export const request = new HttpClient({
	baseURL: isServer() ? process.env.NEXT_PUBLIC_APP_API : '',
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
