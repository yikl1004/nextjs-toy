import { isEmpty } from '../isEmpty'
import { isNil } from '../isNil'
import { map } from '../map'
import { omit } from '../omit'
import { noop } from '../noop'
import type { AppResponse, AppResponseList, AppPathVariables } from './response'

type Params = Record<string, string | number | undefined>
type Data = Record<string, string | number>
type FetchHeaders = Record<string, string>
// eslint-disable-next-line @rushstack/no-new-null
type Nullable<T> = T | null

interface BeforeRequest {
	(
		url: string,
		methods: {
			setUrl: (value: string) => void
			setBaseURL: (value: string) => void
		},
	): void
}

interface FetchOptions<P extends keyof AppResponseList = keyof AppResponseList> {
	baseURL?: string
	headers?: FetchHeaders
	pathVariables?: AppPathVariables[P]
	params?: Nullable<Params>
	data?: Nullable<Data>
	timeout?: number // ms
	beforeRequest?: BeforeRequest
}

enum Methods {
	get = 'GET',
	post = 'POST',
	put = 'PUT',
	delete = 'DELETE',
}

/**
 * @description
 * @TODO:
 *      1. interceptor 기능을 추가 할수 있을 지 검토
 *      2. fetch의 `no-cache`, `max-age`, `no-store` 에 대한 규칙(next의 revalidate, tags에 대해서도 같이 생각해 봐야함)
 */

export class HttpClient {
	private abortConfig = {
		time: 5000,
		controller: new AbortController(),
		timeoutId: NaN as number | NodeJS.Timeout,
	}

	private defaultHeaders = new Headers()

	private url = ''

	private baseURL = ''

	private requestInit: RequestInit = {
		credentials: 'include',
		body: undefined,
		signal: this.abortConfig.controller.signal,
		mode: 'cors',
	}

	private beforeRequest: BeforeRequest

	public constructor(options: FetchOptions) {
		this.abortConfig.time = options.timeout || 5000
		if (options.headers) {
			map(options.headers, (key, value) => this.defaultHeaders.append(key, value))
		}
		this.baseURL = options.baseURL || ''
		this.beforeRequest = options.beforeRequest || noop
	}

	private setUrl(value: string) {
		this.url = value
	}

	private setBaseURL(value: string) {
		this.baseURL = value
	}

	// overwrite
	private setHeader(key: string, value: string) {
		if (this.defaultHeaders.get(key)) {
			this.defaultHeaders.delete(key)
			this.defaultHeaders.append(key, value)
		}
	}

	private setHeaders(headers?: Record<string, string>) {
		if (headers) {
			map(headers, (key, value) => this.setHeader(key, value))
		}
	}

	private setPathVariable<PV>(path: string, pathVariables?: PV | null) {
		const pathVariableKeys = path.split('/').filter((item) => item.match(/^:/g))
		let rewritePath: string = path

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

		this.setUrl(rewritePath)
	}

	private setParams(params?: Params | null) {
		if (params !== null && typeof params !== 'undefined') {
			const paramsObject: Record<string, string> = {}

			map(params, (key, value) => {
				paramsObject[key] = `${value}`
			})

			const searchParams = new URLSearchParams(paramsObject).toString()

			this.setUrl(`${this.url}${searchParams.trim() ? `?${searchParams}` : ''}`)
		}
	}

	private setRequestBody(type: 'json' | 'form', data?: Data | null) {
		if (isNil(data)) return

		if (type === 'form') {
			const formData = new FormData()
			map(data, (key, value) => formData.append(key, `${value}`))
			this.requestInit.body = formData
		}

		if (type === 'json') {
			this.requestInit.body = JSON.stringify(data)
		}
	}

	private setRequestInit<T extends FetchOptions>(options?: T) {
		const omitted = omit(options, ['headers', 'params', 'data', 'baseURL', 'pathVariables'])

		this.requestInit = { ...this.requestInit, ...omitted }
	}

	private setMethod(method: Methods) {
		this.requestInit.method = method
	}

	private setTimeout() {
		this.abortConfig.timeoutId = setTimeout(() => {
			this.abortConfig.controller.abort({
				message: 'The request has timed out.',
			})
		}, this.abortConfig.time)
	}

	private clearTimeout() {
		clearTimeout(this.abortConfig.timeoutId)
	}

	/**
	 * @name call
	 */
	private async call<T extends keyof AppPathVariables>({
		method,
		path,
		pathVariables,
		params,
	}: {
		method: Methods
		path: T extends string ? T : never
		pathVariables?: AppPathVariables[T]
		params?: Params | null | undefined
	}) {
		this.setMethod(method)
		this.setUrl(path)
		this.setPathVariable(path, pathVariables)
		this.setParams(params)

		// 요청하기 전 처리
		this.beforeRequest(this.url, {
			setUrl: this.setUrl.bind(this),
			setBaseURL: this.setBaseURL.bind(this),
		})

		const result = await new Promise<AppResponse<T>>((resolve, reject) => {
			const requestURL = `${this.baseURL}${this.url}`

			this.setTimeout()

			fetch(requestURL, this.requestInit)
				.then(async (response) => {
					this.clearTimeout()
					/**
					 * @warn
					 * FIXME:
					 * 1. httpStatus code에 따른 판단 (현재는 Unauthorization:403 만 확인)
					 * 2. response.status에 따른 판단
					 *      - # 200 - "OK"
					 *      - 400 - "Bad Request"
					 *      - 401 - "Unauthorized"
					 *      - 404 - "Not Found"
					 *      - 405 - "Method Not Allowed"
					 *      - 500 - "Internal Server Error"
					 */
					const json = (await response.json()) satisfies AppResponse<T>
					return resolve(json)
					// throw new Error(
					// 	`ERROR: Failed to fetch. url: ${url}, statusCode: ${response.status}`,
					// )
				})
				.catch((error) => {
					this.clearTimeout()
					return reject(error)
				})
		})

		return result
	}

	/**
	 * @public
	 */
	public async get<T extends keyof AppResponseList>(
		path: T extends string ? T : never,
		options?: FetchOptions<T> & RequestInit,
	) {
		this.setHeader('Content-Type', 'application/json')
		this.setRequestInit(options)
		this.setHeaders(options?.headers)
		const result = await this.call<T>({
			method: Methods.get,
			path,
			pathVariables: options?.pathVariables,
			params: options?.params,
		})

		return result
	}

	public async post<T extends keyof AppResponseList>(
		path: T extends string ? T : never,
		options?: FetchOptions<T> & RequestInit,
	) {
		this.setRequestInit(options)
		this.setHeader('Content-Type', 'application/x-www-form-urlencoded')
		this.setRequestBody('form', options?.data)

		const result = await this.call<T>({
			method: Methods.post,
			path,
			pathVariables: options?.pathVariables,
		})

		return result
	}

	public async put<T extends keyof AppResponseList>(
		path: T extends string ? T : never,
		options?: FetchOptions<T> & RequestInit,
	) {
		this.setRequestInit(options)
		this.setHeader('Content-Type', 'application/json')
		this.setRequestBody('json', options?.data)

		const result = await this.call<T>({
			method: Methods.put,
			path,
			pathVariables: options?.pathVariables,
		})

		return result
	}

	public async delete<T extends keyof AppResponseList>(
		path: T extends string ? T : never,
		options?: FetchOptions<T> & RequestInit,
	) {
		this.setRequestInit(options)
		this.setHeader('Content-Type', 'application/json')
		this.setRequestBody('json', options?.data)

		const result = await this.call<T>({
			method: Methods.delete,
			path,
			pathVariables: options?.pathVariables,
		})

		return result
	}
}
