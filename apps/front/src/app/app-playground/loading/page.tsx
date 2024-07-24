import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Instant Loading States"
			paragraph={
				<>
					<li>
						이 예제는 &ldquo;fetch&rdquo;할 때 인위적인 지연이 있습니다. 각 카테고리
						페이지에 대한 데이터 <code>loading.(js|jsx|ts|tsx)</code>는 스트리밍되기
						전에 카테고리 페이지로드에 대한 데이터가 즉시 로딩 골격을 표시하는 데
						사용됩니다.
					</li>
					<li>
						공유 layout은 중첩된 레이아웃이나 페이지를 로드하는 동안에도 계속 상호 작용
						가능합니다. 자식 요소가 로드되는 동안 counter를 클릭해 보세요.
					</li>
					<li>
						탐색이 중단될 수 있습니다. 한 카테고리로 이동한 다음 첫 번째 카테고리가
						로드되기 전에 두 번째 카테고리를 클릭해 보세요.
					</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/loading">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
