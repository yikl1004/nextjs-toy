/**
 * @description api 응답 결과의 공통 형식
 */
interface CommonResponse<T> {
	/** 응답 결과 코드 - 공통화를 하고 있는 중 */
	resultCode: '00' | string
	/** 응답 결과 메세지 */
	resultMessage: string
	/** 응답 결과 데이터 */
	data: T
}

/**
 * @description 타입 코드
 */
interface TypeCode<C, N> {
	/** 코드 */
	code: C
	/** 코드명 */
	name: N
	/** 비고1 */
	etc1: string
	/** 비고2 */
	etc2: string
}
