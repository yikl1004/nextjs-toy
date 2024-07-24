'use client'

import { useRouter } from 'next/navigation'
import styled from '@emotion/styled'
import { Box } from '@repo/ui'
import { flex, position, padding } from '@repo/utils/emotion'
import { ScrollContainer } from '@components/common/ScrollContainer'

export const ModalStyled = styled.div`
	${flex({ align: 'center', justify: 'center' })}
	${position.fixed({ top: 0, right: 0, bottom: 0, left: 0 })}
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);

	.modal {
		position: relative;
		width: 90vw;
		height: 80vh;
		background-color: white;
		border-radius: 16px;
		${flex({ direction: 'column', justify: 'flex-start', align: 'center' })}

		${({ theme }) => theme.mediaQueries.over.lg} {
			width: 320px;
			min-height: 260px;
		}

		.header {
			height: 36px;
			width: 100%;
			padding: 20px 10px;
			font-weight: 600;
			font-size: 1.4rem;
			${flex({ justify: 'center', align: 'center' })}
			border-bottom: 1px solid rgb(0, 0, 0, 0.3)
		}

		.body {
			${padding({ y: '0', x: '16px' })}
			text-align: center;
			width: 100%;
		}

		.footer {
			${position.absolute({ right: 0, bottom: 0, left: 0 })}
			${padding('16px')}
		}
		.button {
			width: 100%;
			height: 36px;
			border-radius: 8px;
			outline: none;
			border: 0;
			background: #1564ff;
			color: white;
			cursor: pointer;
		}
	}
`

export const Modal = ({ id }: { id: string }) => {
	const router = useRouter()
	// overscroll-behavior: contain;

	return (
		<Box>
			<ModalStyled>
				<Box className="modal">
					<Box className="header">Modal Title</Box>
					<ScrollContainer
						style={{ maxHeight: 'calc(100% - 36px - 68px)', width: '100%' }}
						// scrollableNodeProps={{ ref, ...attributes }}
					>
						<Box className="body">
							<Box>modal</Box>
							<Box>{id}</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
							<Box as="p">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
								accusamus cum modi tempora quibusdam, vitae veritatis distinctio
								necessitatibus aut!
							</Box>
						</Box>
					</ScrollContainer>
					<Box className="footer">
						<button type="button" className="button" onClick={() => router.back()}>
							확인
						</button>
					</Box>
				</Box>
			</ModalStyled>
		</Box>
	)
}
