export interface DataItem {
	name: string
	count: number
	color: string
	// count는 단순 수치이기 때문에 전체 비율로 계산하여 percentage를 추가한다.
	percentage?: number
}
