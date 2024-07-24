import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default async function Page() {
	return (
		<Prose
			title="Suspense를 이용한 Streaming"
			paragraph={
				<>
					<li>
						Streaming을 사용하면 UI 단위를 서버에서 클라이언트로 점진적으로 렌더링하고
						보낼 수 있습니다.
					</li>
					<li>
						이를 통해 사용자는 전체 페이지가 로드될 때까지 기다리지 않고 나머지 콘텐츠가
						로드되는 동안 페이지의 가장 중요한 부분을 보고 상호작용할 수 있습니다.
					</li>
					<li>Streaming은 node와 edge 런타임 모두에서 작동합니다.</li>
					<li>
						위 메뉴에서 <code>node runtime을 선택</code>
						하여 streaming해 보세요.
					</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/streaming">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
