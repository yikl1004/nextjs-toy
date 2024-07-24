export interface PortalProps {
	/**
	 * `container`에 렌더링할 자식 요소입니다.
	 */
	children?: React.ReactNode
	/**
	 * HTML 요소 또는 그것을 반환하는 함수입니다.
	 * `container`는 포털 자식 요소들이 추가될 곳입니다.
	 *
	 * 또한 React layout effect에서 호출되는 callback을 제공할 수 있습니다.
	 * 이를 통해 ref에서 컨테이너를 설정할 수 있으며 서버 사이드 렌더링도 가능하게 합니다.
	 *
	 * 기본적으로 최상위 document 객체의 body를 사용, 대부분의 경우 단순히 `document.body`입니다.
	 */
	container?: Element | (() => Element | null) | null
	/**
	 * `children`은 부모 컴포넌트의 DOM 계층 구조 아래에 위치합니다.
	 * @default false
	 */
	disablePortal?: boolean
}
