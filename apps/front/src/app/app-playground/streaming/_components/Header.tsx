'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import { NextLogo } from '@components/icon/NextLogo'
import { CartCount } from '@page/app-playground/streaming/_components/CartCount'
import { SearchIcon } from '@components/icon/SearchIcon'
import { ShoppingCartIcon } from '@components/icon/ShoppingCartIcon'
import { Box } from '@repo/ui'
import { padding, flex, position } from '@repo/utils/emotion'
import { Image } from '@components/common/Image'

const HeaderStyled = styled('div')`
	${flex({ align: 'center', justify: 'space-between' })}
	column-gap: 0.75rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray800};
	${padding(3)}

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		${padding({ y: 4, x: 5 })}
	}
`

const LeftArea = styled('div')`
	${flex()}
	column-gap: 0.75rem;

	.logo {
		height: 2.5rem;
		width: 2.5rem;

		/* @media hover */
		${({ theme }) => theme.mediaQueries.hover} {
			&:hover {
				opacity: 0.7;
			}
		}
	}

	.search-area {
		/* relative flex-1 */
		position: relative;
		flex: 1 1 0%;

		.icon {
			pointer-events: none;
			${position.absolute({ top: 0, bottom: 0, left: 0 })}
			${flex({ align: 'center' })}
			${padding.left(3)}

			& > svg {
				width: 1.25rem;
				height: 1.25rem;
				color: ${({ theme }) => theme.color.gray300};
			}
		}

		input[type='search'] {
			display: block;
			width: 100%;
			border-radius: 9999px;
			border-style: none;
			background-color: ${({ theme }) => theme.color.gray600};
			${padding.left(10)}
			font-weight: 500;
			color: ${({ theme }) => theme.color.gray200};

			&:focus {
				border-color: ${({ theme }) => theme.color.vercel_pink};
				box-shadow: ${({ theme }) => theme.color.vercel_pink};
			}
		}
	}
`
const RightArea = styled('div')`
	display: flex;
	flex-shrink: 0;
	column-gap: 0.75rem;

	.cart {
		position: relative;
		${flex.center()}
		height: 2.5rem;
		width: 2.5rem;
		flex-shrink: 0;
		border-radius: 9999px;
		background-color: ${({ theme }) => theme.color.gray600};
		color: ${({ theme }) => theme.color.white};

		& > svg {
			width: 1.5rem;
			color: ${({ theme }) => theme.color.white};
		}

		.count {
			background-color: ${({ theme }) => theme.color.vercel_cyan};
			${position.absolute({ right: -1, top: -1 })}
			${flex.center()}
			height: 1rem;
			width: 1rem;
			border-radius: 9999px;
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 700;
			color: ${({ theme }) => theme.color.text.cyan800};
		}
	}

	img {
		border-radius: 9999px;
	}
`

export const Header = () => {
	return (
		<HeaderStyled>
			<LeftArea>
				<Link href="/streaming">
					<Box className="logo">
						<NextLogo />
					</Box>
				</Link>

				<Box className="search-area">
					<Box className="icon">
						<SearchIcon />
					</Box>
					<input
						aria-label="Search"
						type="search"
						name="search"
						id="search"
						autoComplete="off"
					/>
				</Box>
			</LeftArea>

			<RightArea>
				<Box className="cart">
					<ShoppingCartIcon />
					<Box className="count">
						<CartCount />
					</Box>
				</Box>
				<Image src="/demo/prince-akachi-LWkFHEGpleE-unsplash.jpg" width={40} alt="User" />
			</RightArea>
		</HeaderStyled>
	)
}
