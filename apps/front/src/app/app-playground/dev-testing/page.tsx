import { Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="개발용 테스트 페이지"
			paragraph={<li>개발용 함수, 컴포넌트 등을 테스트 하는 페이지입니다.</li>}
		/>
	)
}
