'use client'

import Image from 'next/image'
import styled from '@emotion/styled'
import { Spacer, Alignment, Box } from '@repo/ui'

const ProductThumbnailsStyled = styled('div')`
	grid-column: 1 / -1;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.over.lg} {
		grid-column: span 1 / span 1;
	}

	.main {
		display: none;
		border-radius: 0.5rem;
		filter: grayscale(100%);

		/* @media lg */
		${({ theme }) => theme.mediaQueries.over.lg} {
			display: block;
		}
	}

	.thumbnail {
		width: 33.333333%;

		& > img {
			border-radius: 0.5rem;
			filter: grayscale(100%);
		}
	}
`

interface ProductImage {
	alt: string
	src: string
}

interface ProductThumbnailsProps {
	images: [ProductImage, ProductImage, ProductImage]
}

export const ProductThumbnails = ({ images }: ProductThumbnailsProps) => {
	return (
		<ProductThumbnailsStyled>
			<Spacer vertical={2}>
				<Image
					src={images[0].src}
					className="main"
					alt={images[0].alt}
					height={400}
					width={400}
				/>

				<Alignment flex gap={2}>
					{images.map(({ alt, src }) => (
						<Box className="thumbnail" key={alt}>
							<Image src={src} alt={alt} height={180} width={180} />
						</Box>
					))}
				</Alignment>
			</Spacer>
		</ProductThumbnailsStyled>
	)
}
