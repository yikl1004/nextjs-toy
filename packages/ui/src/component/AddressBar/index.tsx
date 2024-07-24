'use client'

import { Fragment, Suspense } from 'react'
import styled from '@emotion/styled'
import { Box } from '@component/Box.styled'
import { Params } from '@component/AddressBar/Params'
import { padding, flex } from '@repo/utils/emotion'
import { highlight } from '@style/keyframes'

const AddressBarStyled = styled('div')`
	box-shadow: ${({ theme }) => theme.shadow.addressBar};
	${padding('1px')}
	background-image: ${({ theme }) => theme.color.border.section};
	border-radius: 0.5rem;

	.inner {
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.black};
	}

	.content {
		/* @media lg */
		${({ theme }) => theme.mediaQueries.over.lg} {
			${padding({ y: 3, x: 5 })}
		}
		${padding(3.5)}
		-moz-column-gap: 0.5rem;
		column-gap: 0.5rem;
		${flex({ align: 'center' })}
	}

	.icon {
		color: ${({ theme }) => theme.color.gray600};

		svg {
			height: 1rem;
		}
	}

	.paths {
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 1.25rem;
		-moz-column-gap: 0.25rem;
		column-gap: 0.25rem;
		display: flex;

		.seperate {
			color: ${({ theme }) => theme.color.gray600};
		}

		.home {
			color: ${({ theme }) => theme.color.gray400};
			${padding.x(2)}
		}

		.item {
			color: ${({ theme }) => theme.color.gray100};
			${padding({ y: 0.5, x: 1.5 })}
			border-radius: 9999px;
			animation: ${highlight} 1s ease-in-out 1;
		}
	}
`

interface AddressBarProps {
	pathname: string
	searchParams: URLSearchParams
}

export const AddressBar = ({ pathname, searchParams }: AddressBarProps) => {
	return (
		<AddressBarStyled>
			<Box className="inner">
				<Box className="content">
					<Box className="icon">
						<svg
							xmlns="h ttp://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clipRule="evenodd"
							/>
						</svg>
					</Box>
					<Box className="paths">
						<Box>
							<Box as="span" className="home">
								Home
							</Box>
						</Box>
						{pathname ? (
							<>
								<Box as="span" className="seperate">
									/
								</Box>
								{pathname
									.split('/')
									.slice(2)
									.map((segment) => (
										<Fragment key={segment}>
											<Box as="span">
												<Box as="span" className="item">
													{segment}
												</Box>
											</Box>
											<Box as="span" className="seperate">
												/
											</Box>
										</Fragment>
									))}
							</>
						) : null}
						<Suspense>
							<Params searchParams={searchParams} />
						</Suspense>
					</Box>
				</Box>
			</Box>
		</AddressBarStyled>
	)
}
