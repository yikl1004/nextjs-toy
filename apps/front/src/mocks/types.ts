import { http } from 'msw'

export type Params = Parameters<typeof http.get>
export type Path = Params[0]
export type Resolver = Params[1]
export interface GetParams {
	path: Path
	resolver: Resolver
}
