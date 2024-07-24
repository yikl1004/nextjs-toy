import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Dynamic Data"
			paragraph={
				<>
					<li>동적 또는 서버 렌더링 데이터는 각 요청마다 새로 가져옵니다.</li>
					<li>이 예제에서는 게시물 응답이 명시적으로 캐시되지 않습니다.</li>
					<li>각 게시물을 탐색하고 페이지가 렌더링된 타임스탬프를 기록해 보세요.</li>
				</>
			}
		>
			<Alignment flex gap={2} className="flex gap-2">
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#dynamic-data-fetching">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/ssr">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
