/* eslint-disable @rushstack/no-new-null */
import type {
	ComponentPropsWithRef,
	ComponentPropsWithoutRef,
	ElementType,
	PropsWithChildren,
} from 'react'
import type { UrlObject } from 'url'

type Url = string | UrlObject

interface InternalLinkProps {
	/**
	 * The path or URL to navigate to. It can also be an object.
	 *
	 * @example https://nextjs.org/docs/api-reference/next/link#with-url-object
	 */
	href: Url
	/**
	 * Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).
	 */
	as?: Url
	/**
	 * Replace the current `history` state instead of adding a new url into the stack.
	 *
	 * @defaultValue `false`
	 */
	replace?: boolean
	/**
	 * Whether to override the default scroll behavior
	 *
	 * @example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page
	 *
	 * @defaultValue `true`
	 */
	scroll?: boolean
	/**
	 * Update the path of the current page without rerunning [`getStaticProps`](/docs/pages/building-your-application/data-fetching/get-static-props), [`getServerSideProps`](/docs/pages/building-your-application/data-fetching/get-server-side-props) or [`getInitialProps`](/docs/pages/api-reference/functions/get-initial-props).
	 *
	 * @defaultValue `false`
	 */
	shallow?: boolean
	/**
	 * Forces `Link` to send the `href` property to its child.
	 *
	 * @defaultValue `false`
	 */
	passHref?: boolean
	/**
	 * Prefetch the page in the background.
	 * Any `<Link />` that is in the viewport (initially or through scroll) will be preloaded.
	 * Prefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover in pages router but not in app router. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.
	 *
	 * @defaultValue `true`
	 */
	prefetch?: boolean
	/**
	 * The active locale is automatically prepended. `locale` allows for providing a different locale.
	 * When `false` `href` has to include the locale as the default behavior is disabled.
	 */
	locale?: string | false
	/**
	 * Enable legacy link behavior.
	 * @defaultValue `false`
	 * @see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7
	 */
	legacyBehavior?: boolean
	/**
	 * Optional event handler for when the mouse pointer is moved onto Link
	 */
	onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>
	/**
	 * Optional event handler for when Link is touched.
	 */
	onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>
	/**
	 * Optional event handler for when Link is clicked.
	 */
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export type LinkComponent = React.ForwardRefExoticComponent<
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> &
		InternalLinkProps & {
			children?: React.ReactNode
		} & React.RefAttributes<HTMLAnchorElement>
>

/**
 * =========================================================
 * ================= Polymorphic Component =================
 * =========================================================
 */

// 컴포넌트의 렌더링 요소를 변경할 수 있는 'as' prop을 정의
interface AsProp<C extends ElementType> {
	as?: C
}
/**
 * 중복을 피하기 위해 생략해야 할 prop들의 키를 정의
 */
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

/**
 * `ref`를 제외한 다형성 컴포넌트의 prop 타입을 정의
 * `PropsWithChildren`, `AsProp`, 그리고 기본 컴포넌트 props에서 중복을 제거한 타입을 결합합니다.
 */
export type PolymorphicComponentProp<C extends ElementType, Props = {}> = PropsWithChildren<
	Props & AsProp<C>
> &
	Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

/**
 * ref를 포함한 다형성 컴포넌트의 prop 타입을 정의
 * `PolymorphicComponentProp`을 확장하고 `PolymorphicRef`를 추가
 */
export type PolymorphicComponentPropWithRef<
	C extends ElementType,
	Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }

/**
 * 다형성 컴포넌트의 ref 타입을 정의합니다.
 */
export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']
