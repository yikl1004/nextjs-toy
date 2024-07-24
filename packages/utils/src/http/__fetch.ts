/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AppResponse, AppResponseList, AppPathVariables } from './response'

type Params = Record<string, string | number>
type Data = Record<string, string | number>
type FetchHeaders = Record<string, string>
// eslint-disable-next-line @rushstack/no-new-null
type Nullable<T> = T | null

interface FetchOptions<P extends keyof AppResponseList = keyof AppResponseList> {
	baseURL?: string
	headers?: FetchHeaders
	pathVariables?: AppPathVariables[P]
	params?: Nullable<Params>
	data?: Nullable<Data>
}
type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE'
// type OmitProperties = keyof FetchOptions

/**
 * @description
 * @TODO:
 *      1. interceptor 기능을 추가 할수 있을 지 검토
 *      2. fetch의 `no-cache`, `max-age`, `no-store` 에 대한 규칙(next의 revalidate, tags에 대해서도 같이 생각해 봐야함)
 */

export const httpRequest = (defaultOptions: FetchOptions) => {
	const timeout = 5000 // default
	const controller = new AbortController()
	const defaultHeaders = new Headers()
	let url = ''
	let requestInit: RequestInit = {
		credentials: 'include',
		body: undefined,
		signal: controller.signal,
		mode: 'cors',
	}

	function map<T extends Record<string, string | number>>(
		obj: T,
		callback: (key: keyof T, value: T[keyof T]) => void,
	) {
		Object.entries(obj).forEach(([key, value]) => callback(key, value as T[keyof T]))
	}

	function isServer() {
		return typeof document === 'undefined'
	}

	function isNil(value: any) {
		return value === null || typeof value === 'undefined'
	}

	function isEmpty(value: any | undefined) {
		return (
			[Object, Array].includes((value || {}).constructor) &&
			!Object.entries(value || {}).length
		)
	}

	if (defaultOptions.headers) {
		map(defaultOptions.headers, (key, value) => defaultHeaders.append(key, value))
	}

	// overwrite
	function setHeader(key: string, value: string) {
		if (defaultHeaders.get(key)) {
			defaultHeaders.delete(key)
			defaultHeaders.append(key, value)
		}
	}

	function setHeaders(headers?: Record<string, string>) {
		if (headers) {
			map(headers, (key, value) => setHeader(key, value))
		}
	}

	function setPath<PV>(path: string, pathVariables?: PV | null) {
		const pathVariableKeys = path.split('/').filter((item) => item.match(/^:/g))
		let rewritePath = path

		// 유효성검사
		if (pathVariableKeys.length > 0 && (isNil(pathVariables) || isEmpty(pathVariables))) {
			// 유효하지 않음
			throw new Error(`[pathVariable] 속성의 값이 유효하지 않습니다.`)
		}

		// 유효
		if (pathVariableKeys.length > 0 && pathVariables) {
			pathVariableKeys.forEach((item) => {
				const key = item.replace(':', '') as keyof PV
				rewritePath = `${rewritePath}`.replace(item, `${pathVariables[key]}`)
			})
		}

		url = rewritePath
	}

	function rewritesPath() {
		// FIXME: 우회 처리
		if (url.startsWith('/mock')) {
			defaultOptions.baseURL = process.env.SITE_URL
			url = `/api${url}`
		}

		if (isServer() && url.startsWith('/restapi')) {
			url = url.replace('/restapi', '')
		}
	}

	function setParams(params?: Params | null) {
		if (!isNil(params)) {
			const paramsObject: Record<string, string> = {}

			if (params) {
				map(params, (key, value) => {
					paramsObject[key] = `${value}`
				})
			}

			const searchParams = new URLSearchParams(paramsObject).toString()

			setPath(`${url}${searchParams.trim() ? `?${searchParams}` : ''}`)
		}
	}

	function setRequestBody(type: 'json' | 'form', data?: Data | null) {
		if (isNil(data)) return

		if (type === 'form') {
			const formData = new FormData()
			if (data) {
				map(data, (key, value) => formData.append(key, `${value}`))
			}
			requestInit.body = formData
		}

		if (type === 'json') {
			requestInit.body = JSON.stringify(data)
		}
	}

	function setRequestInit<T>(options?: T) {
		const omitList = ['headers', 'params', 'data', 'baseURL', 'pathVariables']
		const omitted = options
			? Object.entries(options).reduce((data, [key, value]) => {
					if (!omitList.includes(key)) {
						Object.defineProperty(data, key, { value })
					}

					return data
				}, {} as T)
			: ({} as T)
		requestInit = { ...requestInit, ...omitted }
	}

	function setMethod(method: Methods) {
		requestInit.method = method
	}

	async function call<T>() {
		const result = await new Promise<AppResponse<T>>((resolve, reject) => {
			const timeoutId = setTimeout(() => {
				controller.abort({ message: 'The request has timed out.' })
			}, timeout)

			// 지정된 경로는 우회처리
			rewritesPath()

			const requestURL = `${defaultOptions.baseURL}${url}`

			fetch(requestURL, requestInit)
				.then(async (response) => {
					clearTimeout(timeoutId)

					/**
					 * @warn
					 * FIXME:
					 * 1. httpStatus code에 따른 판단 (현재는 Unauthorization:403 만 확인)
					 * 2. response json의 resultCode에 따른 판단
					 * 200 - "OK"
					 * 400 - "Bad Request"
					 * 401 - "Unauthorized"
					 * 404 - "Not Found"
					 * 405 - "Method Not Allowed"
					 * 500 - "Internal Server Error"
					 */
					const json = (await response.json()) as AppResponse<T>
					return resolve(json)
				})
				.catch((error) => {
					clearTimeout(timeoutId)
					return reject(error)
				})
		})

		return result
	}

	return {
		async get<T extends keyof AppResponseList>(
			path: T,
			options?: FetchOptions<T> & RequestInit,
		) {
			setPath(path, options?.pathVariables)
			setHeader('Content-Type', 'application/json')
			setRequestInit(options)
			setHeaders(options?.headers)
			setParams(options?.params)
			setMethod('GET')
			const result = await call<T>()

			return result
		},

		async post<T extends keyof AppResponseList>(
			path: T,
			options?: FetchOptions<T> & RequestInit,
		) {
			setPath(path)
			setRequestInit(options)
			setHeader('Content-Type', 'application/x-www-form-urlencoded')
			setRequestBody('form', options?.data)
			setMethod('POST')

			const result = await call<AppResponseList[T]>()

			return result
		},

		async put<T extends keyof AppResponseList>(
			path: T,
			options?: FetchOptions<T> & RequestInit,
		) {
			setPath(path)
			setRequestInit(options)
			setHeader('Content-Type', 'application/json')
			setRequestBody('json', options?.data)
			setMethod('PUT')

			const result = await call<AppResponseList[T]>()

			return result
		},

		async delete<T extends keyof AppResponseList>(
			path: T,
			options?: FetchOptions<T> & RequestInit,
		) {
			setPath(path)
			setRequestInit(options)
			setHeader('Content-Type', 'application/json')
			setRequestBody('json', options?.data)
			setMethod('DELETE')

			const result = await call<AppResponseList[T]>()

			return result
		},
	}
}
