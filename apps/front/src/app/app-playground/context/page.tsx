import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	const title = 'Client Context'

	return (
		<Prose
			title={title}
			paragraph={
				<>
					<li>
						이 예시는 Server/Client Component 경계를 넘어가는 Client Component 간에
						상태를 공유하기 위해 Context를 사용합니다.
					</li>
					<li>
						카운터를 증가시키고 페이지를 이동해 보세요. 레이아웃과 페이지가 Server
						Component 내에 있더라도 앱 전체에서 카운터 상태가 공유되는 것에 주목하세요.
					</li>
				</>
			}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/getting-started/react-essentials#context">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/context">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
