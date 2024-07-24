import { Alignment, Boundary, ExternalLink, Prose } from '@repo/ui'

export default function Page() {
	return (
		<Boundary labels={['parallel-routes/page.tsx']} size="small">
			<Prose
				title="Parallel Routes"
				paragraph={
					<>
						<li>
							Parallel Routes를 사용하면 동일한 Layout에서 독립적인 탐색을 통해 여러
							페이지를 동시에 또는 조건부로 렌더링할 수 있습니다.
						</li>
						<li>
							Parallel Routes는
							<a href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes">
								Conditional Routes
							</a>{' '}
							(조건부) 및{' '}
							<a href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes">
								Intercepted Routes
							</a>
							(차단된) 같은 고급 라우팅 패턴에 사용할 수 있습니다. .
						</li>
						<li>
							하나의 Parallel Routes에서 탭을 사용해 탐색해 보세요. URL은 변경되지만
							영향을 받지 않는 Parallel Routes는 유지됩니다.
						</li>
						<li>
							브라우저의 뒤로 및 앞으로 탐색을 사용해 보세요. 브라우저의 URL 기록
							상태와 활성 UI 상태가 올바르게 동기화되었는지 확인하세요.
						</li>
						<li>
							하나의 Parallel Routes에서 탭으로 이동하고 브라우저를 새로 고쳐 보세요.
							초기 URL과 일치하지 않는 Parallel Routes를 표시할 UI를 선택할 수
							있습니다.
						</li>
					</>
				}
			>
				<Alignment flex gap={2}>
					<ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes">
						Docs
					</ExternalLink>

					<ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/parallel-routes">
						Code
					</ExternalLink>
				</Alignment>
			</Prose>
		</Boundary>
	)
}
