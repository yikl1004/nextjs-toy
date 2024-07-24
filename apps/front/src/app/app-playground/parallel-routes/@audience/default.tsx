import { CurrentRoute } from '@page/app-playground/parallel-routes/(ui)/current-route'
import { Boundary, Button, Prose } from '@repo/ui'

export default function Default() {
	return (
		<Boundary labels={['@audience/default.tsx']} color="blue" size="small">
			<Prose
				title="Default UI"
				smallParagraph={
					<>
						<li>
							<code>
								@audience/
								<CurrentRoute />
								/page.js
							</code>{' '}
							가 존재하지 않습니다.
						</li>

						<li>
							<code>@audience/default.js</code>가 존재합니다.
						</li>
					</>
				}
				// buttonGroup={<ButtonLink href="/app-playground/parallel-routes">Home</ButtonLink>}
				buttonGroup={
					<Button kind="link" href="/app-playground/parallel-routes">
						Home
					</Button>
				}
			>
				<p>
					<code>@audience</code> 슬롯에 현재{' '}
					<code>
						/
						<CurrentRoute slice={1} />
					</code>{' '}
					경로와 일치하는 경로 세그먼트가 <strong>포함되어 있지 않기 때문에</strong>{' '}
					Default(기본) UI가 렌더링됩니다.
				</p>
			</Prose>
		</Boundary>
	)
}
