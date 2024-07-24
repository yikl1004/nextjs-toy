import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { HydrationBoundary } from '@tanstack/react-query'
import { RecommendedProducts } from '@page/app-playground/streaming/_components/RecommendedProducts'
import { Reviews } from '@page/app-playground/streaming/_components/Reviews'
import { SingleProduct } from '@page/app-playground/streaming/_components/SingleProduct'
import { Ping } from '@page/app-playground/streaming/_components/Ping'
import { Spacer, Box } from '@repo/ui'
import {
	RecommendedProductsSkeleton,
	ReviewsSkeleton,
} from '@page/app-playground/streaming/Skeleton.styled'
import { productPrefetchQuery } from '@services/demo/product'

export const runtime = 'edge'

export default async function Page({ params }: { params: { id: string } }) {
	const { data: prefetchedData, dehydratedState } = await productPrefetchQuery({ id: params.id })

	if (!prefetchedData) {
		notFound()
	}

	return (
		<HydrationBoundary state={dehydratedState}>
			<Spacer vertical={8} lg={{ spaceY: 14 }}>
				<SingleProduct data={prefetchedData} />
				<Box display="block" position="relative">
					<Box display="block" position="absolute" left={-4} top={1}>
						<Ping />
					</Box>
				</Box>

				<Box display="block" position="relative">
					<Box display="block" position="absolute" left={-4} top={1}>
						<Ping />
					</Box>
				</Box>

				<Suspense fallback={<RecommendedProductsSkeleton />}>
					<RecommendedProducts
						path="/app-playground/streaming/edge/product"
						filter={params.id}
						// no-store
					/>
				</Suspense>

				<Suspense fallback={<ReviewsSkeleton />}>
					<Reviews />
				</Suspense>
			</Spacer>
		</HydrationBoundary>
	)
}
