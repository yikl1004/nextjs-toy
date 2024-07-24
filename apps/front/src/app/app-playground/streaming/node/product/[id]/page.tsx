import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { RecommendedProducts } from '@page/app-playground/streaming/_components/RecommendedProducts'
import { Reviews } from '@page/app-playground/streaming/_components/Reviews'
import { SingleProduct } from '@page/app-playground/streaming/_components/SingleProduct'
import { Ping } from '@page/app-playground/streaming/_components/Ping'
import {
	RecommendedProductsSkeleton,
	ReviewsSkeleton,
} from '@page/app-playground/streaming/Skeleton.styled'
import { Box, Spacer } from '@repo/ui'
import { productPrefetchQuery } from '@services/demo/product'

export default async function Page({ params }: { params: { id: string } }) {
	const { data: prefetchedData } = await productPrefetchQuery({ id: params.id })

	if (!prefetchedData) {
		notFound()
	}

	return (
		<Spacer vertical={8} lg={{ spaceY: 14 }}>
			<SingleProduct data={prefetchedData} />

			<Box className="relative">
				<Box position="absolute" left={-4} top={2}>
					<Ping />
				</Box>
			</Box>

			<Suspense fallback={<RecommendedProductsSkeleton />}>
				<RecommendedProducts path="/streaming/node/product" filter={params.id} />
			</Suspense>

			<Box position="relative">
				<Box position="absolute" left={-4} top={2}>
					<Ping />
				</Box>
			</Box>

			<Suspense fallback={<ReviewsSkeleton />}>
				<Reviews />
			</Suspense>
		</Spacer>
	)
}
