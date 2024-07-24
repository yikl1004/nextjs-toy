/* eslint-disable @next/next/no-img-element */
import { Image } from '@app/image'

export default function Page() {
	const imageSources = {
		desktop: 'https://placehold.co/600x400?text=extra+large',
		tablet: 'https://placehold.co/600x400?text=large',
		mobile: 'https://placehold.co/600x400?text=small',
	}
	const alt = '이미지 테스트'

	return (
		<>
			<Image src={imageSources} alt={alt} />
			<div>
				<h3>Test</h3>
				<img src="/demo/test1.jpg" alt="11" />
				<img src="/demo/test2.jpg" alt="11" />
				<img src="/demo/test3.jpg" alt="11" />
			</div>
		</>
	)
}
