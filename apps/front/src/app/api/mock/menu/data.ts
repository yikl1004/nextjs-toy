import { Item } from '@services/mock/menu/getMenu'

export const menuList: { name: string; items: Item[] }[] = [
	{
		name: 'Layouts',
		items: [
			{
				name: 'Nested Layouts',
				slug: 'layouts',
				description: '여러 route에서 공유되는 UI(중첩 레이아웃)',
			},
			{
				name: 'Grouped Layouts',
				slug: 'route-groups',
				description: 'URL 경로에 영향을 주지 않고 route 구성',
			},
			{
				name: 'Parallel Routes',
				slug: 'parallel-routes',
				description: '동일한 Lsyout으로 여러 페이지 렌더링',
			},
		],
	},
	{
		name: 'File Conventions',
		items: [
			{
				name: 'Loading',
				slug: 'loading',
				description: '의미있는 Loading UI',
			},
			{
				name: 'Error',
				slug: 'error-handling',
				description: 'Error 페이지 UI',
			},
			{
				name: 'Not Found',
				slug: 'not-found',
				description: 'NotFound 페이지 UI',
			},
		],
	},
	{
		name: 'Data Fetching',
		items: [
			{
				name: 'Streaming과 Suspense',
				slug: 'streaming',
				description: 'React Suspense를 활용하여 서버에서 streaming 데이터 fetch하기',
			},
			{
				name: 'Static Data',
				slug: 'ssg',
				description: '정적 페이지 생성',
			},
			{
				name: 'Dynamic Data',
				slug: 'ssr',
				description: '서버 렌더 페이지',
			},
			{
				name: 'Incremental Static Regeneration',
				slug: 'isr',
				description: 'Static & Dynamic 생성의 장점 활용',
			},
		],
	},
	{
		name: 'Components',
		items: [
			{
				name: 'Client Context',
				slug: 'context',
				description:
					'Server/Client Component 경계를 가로 지르는 Client Component 간의 컨텍스트 전달',
			},
		],
	},
	{
		name: 'Misc',
		items: [
			{
				name: 'Client Component Hooks',
				slug: 'hooks',
				description: 'Client Component에서 사용가능한 Hook',
			},
			{
				name: 'CSS and CSS-in-JS',
				slug: 'styling',
				description: 'Styling 방법(@emotion)',
			},
			{
				name: 'Code Snippets',
				slug: 'snippets',
				description: '활용도 높음 App router의 코드 스니펫',
			},
			{
				name: 'Modal',
				slug: 'use-modal',
				description: 'Modal을 구현하는 방법',
			},
		],
	},
	{
		name: 'Development',
		items: [
			{
				name: 'Chart(Highchart)',
				slug: 'dev-testing/chart',
				description: 'chart 예제',
			},
			{
				name: 'Cookie',
				slug: 'dev-testing/cookie',
				description: 'cookie 사용 예제, cookies() 함수',
			},
			{
				name: 'DatePicker(react-datepicker)',
				slug: 'dev-testing/datepicker',
				description: 'react-datepicker를 사용한 달력 출력',
			},
			{
				name: 'Fetch',
				slug: 'dev-testing/fetch',
				description: 'custom된 fetch함수를 통해 react-query와 함께 테스 내용을 기록합니다.',
			},
			{
				name: 'Notification',
				slug: 'dev-testing/notification',
				description: '`notistack`을 이용한 notification UI와 그에 따른 기능 예제',
			},
			{
				name: 'Polling',
				slug: 'dev-testing/polliing',
				description: 'react-query의 option을 이용해 polling을 구현한 예제',
			},
			{
				name: 'Style Test',
				slug: 'dev-testing/styletest',
				description: 'styled 컴포넌트를 테스트해보는 페이지',
			},
		],
	},
	{
		name: 'Externals',
		items: [
			{
				name: 'Video Player',
				slug: 'videoplayer',
				description: 'VOD 플레이어 삽입',
			},
			{
				name: 'Board',
				slug: 'board',
				description: '게시판 삽입',
			},
			{
				name: 'Comment',
				slug: 'comment',
				description: '댓글 삽입',
			},
		],
	},
]
