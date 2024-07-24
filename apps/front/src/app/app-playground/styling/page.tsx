import { Alignment, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Prose
			title="Styling"
			paragraph={<li>@emotion을 적용 하고 있으므로 기타 다른 방법에 대한 설명은 생략</li>}
		>
			<Alignment flex gap={2}>
				<ExternalLink href="https://nextjs.org/docs/app/building-your-application/styling/css-modules">
					Docs
				</ExternalLink>
				<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/styling">
					Code
				</ExternalLink>
			</Alignment>
		</Prose>
	)
}
