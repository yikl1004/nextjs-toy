import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Static Data"
			paragraph={
				<>
					<li>기본적으로 Next.js의 fetch data는 정적으로 캐시됩니다.</li>
					<li>이 예제에서는 Post 1과 2에 대한 data fetch를 정적으로 캐시합니다.</li>
					<li>임의의 Post 3은 처음 요청할 때 On-demeand방식으로 fetch합니다.</li>
					<li>각 게시물을 탐색하고 페이지가 렌더링된 타임 스탬프를 기록해 보세요.</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/ssg">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
