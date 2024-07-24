import { CategoryName, Boundary, Spacer } from '@repo/ui'
// import { APITester } from '@/app/apitest/APITester'

export default function Page() {
	return (
		// <PageStyled>
		// 	<h1>API, Fetch, react-query Test</h1>
		// 	<p>아래 React-Query Devtools를 통해 확인</p>
		// 	<hr />
		// </PageStyled>
		<Boundary labels={['Page [Server Component]']} animateRerendering={false}>
			<Spacer vertical={8}>
				<CategoryName name="Fetch">All</CategoryName>
			</Spacer>
		</Boundary>
	)
}
