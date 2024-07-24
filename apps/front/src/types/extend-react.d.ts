/**
 * @description React에서 지원되지 않는 type을 추가하는 것이 가능
 * @warn 추가할 경우 override 되지 않도로 주의가 필요
 */
declare namespace React {
	/**
	 * @description Component의 children prop을 require로 강제
	 * @warn children prop을 반드시 받아야만 하는 컴포넌트에서 사용
	 */
	type StrictPropsWithChildren<P = unknown> = P & { children: ReactNode | undefined }
}
