import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Layouts"
			paragraph={
				<>
					<li>
						Layout은 여러 페이지에서 공유되는 UI입니다. 탐색시 레이아웃은 상태를
						유지하고 대화형을 유지하며 다시 렌더링되지 않습니다. 두개 이상의 layout을
						중첩할 수도 있습니다.
					</li>
					<li>카테고리와 하위 카테고리를 탐색하며 확인해보세요.</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
