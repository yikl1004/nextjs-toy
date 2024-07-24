export interface AppResponseList {
	/** overrides... */
}

export interface AppPathVariables {
	[key: string]: { [key: string]: string }
	/** overrides... */
}

export type Path = keyof AppResponseList

export type AppResponse<P> = P extends Path ? AppResponseList[P] : never
