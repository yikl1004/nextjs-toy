import { cookies } from 'next/headers'
import { Boundary, Prose, Spacer } from '@repo/ui'
import { CartCountProvider } from '@page/app-playground/streaming/_components/cart-count-context/cart-count-provider'
import { Header } from '@page/app-playground/streaming/_components/Header'

export const metadata = {
	title: 'Streaming (Edge Runtime)',
}

export default function Layout({ children }: { children: React.ReactNode }) {
	const cartCount = Number(cookies().get('_cart_count')?.value || '0')

	return (
		<>
			<Prose
				paragraph={
					<>
						<li>
							Primary product information is loaded first as part of the initial
							response.
						</li>
						<li>
							Secondary, more personalized details (that might be slower) like ship
							date, other recommended products, and customer reviews are progressively
							streamed in.
						</li>
						<li>Try refreshing or navigating to other recommended products.</li>
					</>
				}
			/>

			<Boundary animateRerendering={false} labels={['Demo']} size="small">
				<CartCountProvider initialCartCount={cartCount}>
					<Spacer vertical={10}>
						<Header />
						{children}
					</Spacer>
				</CartCountProvider>
			</Boundary>
		</>
	)
}
