import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Route Groups"
			paragraph={
				<>
					<li>
						이 예제에서는 Route Groups를 사용하여 URL 구조에 영향을 주지 않고 앱의
						다양한 섹션에 대한 레이아웃을 만듭니다.
					</li>
					<li>페이지를 탐색하고 각 섹션에 사용된 다양한 레이아웃을 확인해 보세요.</li>
					<li>Route Groups을 사용하여 다음을 수행할 수 있습니다.</li>
					<ul>
						<li>공유된 레이아웃에서 Route Segment를 선택 해제 합니다.</li>
						<li>URL 구조에 영향을 주지 않고 경로를 구성합니다.</li>
						<li>앱의 최상위 수준을 분할하여 여러 루트 레이아웃을 만듭니다.</li>
					</ul>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/route-groups">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/route-groups">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
