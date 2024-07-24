'use client'

import styled from '@emotion/styled'
import { margin, padding } from '@repo/utils/emotion'
import { Grid } from '@component/Grid.styled'
import { Box } from '@component/Box.styled'
import { LinkComponent } from '@typings/index'

const LinkBlockStyled = styled('a')`
	/* group  */
	display: block;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray900};
	${margin({ y: 1.5 })}
	${padding({ x: 5, y: 3 })}

	& > .name {
		font-weight: 500;
		color: ${({ theme }) => theme.color.gray200};
	}

	& > .description {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: ${({ theme }) => theme.color.gray400};
	}

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			background-color: ${({ theme }) => theme.color.gray800};

			& > .name {
				color: ${({ theme }) => theme.color.gray50};
			}

			& > .description {
				color: ${({ theme }) => theme.color.gray300};
			}
		}
	}
`

interface LinkBlockType {
	list: {
		slug: string
		name: string
		description?: string
	}[]
	as: LinkComponent
}

export const LinkBlockList = ({ list, as }: LinkBlockType) => {
	const Link = as

	return (
		<Grid cols={1} gap={5} lg={{ cols: 2 }}>
			{list.map(({ slug, name, description }) => (
				<LinkBlockStyled as={Link} href={slug} key={name}>
					<Box className="name">{name}</Box>
					{description ? <Box className="description">{description}</Box> : null}
				</LinkBlockStyled>
			))}
		</Grid>
	)
}
