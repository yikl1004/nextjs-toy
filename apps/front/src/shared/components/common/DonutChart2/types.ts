/** 호를 그리기 위한 정보 */
export interface ArcData {
	/** 원의 중심의 x 좌표 */
	x: number
	/** 원의 중심의 y 좌표 */
	y: number
	/** 원의 반지름 */
	radius: number
	/** 원점에서 부터 호를 그릴 각도 */
	degree: number
}

export interface Data {
	category: string
	count: number
	color: string
}

export type DataList = (Data & { percent: number })[]

/** 도넛의 조각과 조각 사이의 간격 설정 */
export interface Spacing {
	/** 도넛의 두께를 정의합니다 @default 3 */
	stroke: number
}

export interface DonutChartState {
	/** 최대 각도 제한 */
	readonly maxDgree: 359.9
	/** 차트에 출력될 정보 */
	data: DataList
	/** 원의 사이즈 */
	size: number
	/** 도넛의 두께 */
	thickness: number
	/** 도넛의 조각과 조각 사이의 간격에 대한 설정 */
	spacing?: Spacing
	/** spacing을 위한 mask의 id 속성 문자열 */
	maskId: string
	/** 호를 그리기 위한 정보 배열 */
	arcData: ArcData[]
	/** 360도 중에 data.count만큼 자치하는 각도 */
	ratioBy360Degree: number[]
}
