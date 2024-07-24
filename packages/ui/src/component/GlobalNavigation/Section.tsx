/* eslint-disable @rushstack/no-new-null */
import { Box } from '@component/Box.styled'
import { NavItem } from '@component/GlobalNavigation/NavItem'
import { Name } from '@component/GlobalNavigation/styled'
import { Item } from '@component/GlobalNavigation/types'
import { Spacer } from '@component/Spacer.styled'

interface SectionProps {
	name: string
	items: Item[]
	segment: string | null
}

export function Section({ name, items, segment }: SectionProps) {
	return (
		<Box>
			<Name>
				<Box>{name}</Box>
			</Name>
			<Spacer vertical={1}>
				{items.map((item) => (
					<NavItem key={item.slug} item={item} segment={segment} />
				))}
			</Spacer>
		</Box>
	)
}
