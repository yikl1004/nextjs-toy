import HomePageStyled from '@page/app-playground/HomePage.styled'
import { MenuGroupStyled } from '@page/app-playground/MenuGroup.styled'
import { menuPrefetchQuery } from '@services/mock/menu'
import { notFound } from 'next/navigation'

export default async function Page() {
	const { data } = await menuPrefetchQuery()

	if (!data) {
		notFound()
	}

	return (
		<HomePageStyled title="Examples">
			{data.data.map((section) => (
				<MenuGroupStyled key={section.name} title={section.name} items={section.items} />
			))}
		</HomePageStyled>
	)
}
