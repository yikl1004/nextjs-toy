'use client'

/**
 * @see https://github.com/mfranzke/loading-attribute-polyfill
 * @see https://www.tcpschool.com/html-tag-attrs/source-media
 *
 * -
 * @note
 *  1. 이미지 CDN 서비스 규칙에 따라 해상도 별 이미지를 어떻게 로드 할건지 정해야 함
 *      - REST API 에서 구분하여 내려주기로 했지만, 구분을 위해 내려주는 것인지,
 *      - 실제 사용가능한 것과 가능하지 않은 것에대한 구분이 불가능
 *      - 애초에 이미지 CDN서비스의 규칙 자체를 사용하지 못하는 것인지? 명확한 처리가 어떻게 되는지 알필요가 있음
 *      - 기획, 디자인 현업 등 이 문제를 알아야 할 모든 담당자가 알고 있었으면 좋겠음(추후 의견 불일치로 인한 문제 소지가 있으므로)
 *      - 디바이스 해상도 문제에 따른 화질 저하 문제 등은 어떻게 처리되고 있는지 또는 어떻게 개발할건지 결정 됬으면 좋겠음(현재 상태 라면 무시 해야됨)
 *  2. 디자인의 breakpoint에 따라 media 속성을 정해야 함
 *      - 1번 문제에 후속으로 따라오는 문제로 1번의 결과에 따라 달리질 수 있음.
 *  3. intersectionObserver, loading="lazy" 의 polyfill이 필요하고, css와 js는 code splitting 해야함
 *      - fornt-end에서 단독으로 처리
 * 4. fetchPriority 속성은 조금더 상황을 지켜보고 고민할 문제...
 */
import { isString } from '@repo/utils'

interface ImageProps {
	src:
		| {
				mobile?: string
				tablet?: string
				desktop: string
		  }
		| string
	alt: string
	width?: number | 'auto'
	height?: number | 'auto'
	className?: string
	caption?: string
}

export const Image = ({ src, alt, width, height = 'auto', className, caption }: ImageProps) => {
	/**
	 * TODO: `@emotion/react` 의 `useTheme` 로 교체
	 * @example
	 * import {useTheme} from '@emotion/react'
	 *
	 * const { breakpoint } = useTheme()
	 */
	const breakpoint = { md: 768, lg: 1024, xl: 1280 } as const

	return (
		<figure>
			<picture className={className}>
				{isString(src) ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img src={src} alt={alt} loading="lazy" style={{ width, height }} />
				) : (
					<>
						<source media={`(max-width : ${breakpoint.md}px)`} srcSet={src.mobile} />
						<source
							media={`(min-width : ${breakpoint.md + 1}px) and (max-width : ${breakpoint.lg}px)`}
							srcSet={src.tablet}
						/>
						<source
							media={`(min-width : ${breakpoint.lg + 1}px)`}
							srcSet={src.desktop}
						/>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img alt={alt} loading="lazy" style={{ width, height }} />
					</>
				)}
			</picture>
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	)
}
