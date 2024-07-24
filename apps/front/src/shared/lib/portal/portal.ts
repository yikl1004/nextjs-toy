'use client'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useEnhancedEffect, setRef, useForkRef } from './utils'
import { PortalProps } from './types'

function getContainer(container: PortalProps['container']) {
	return typeof container === 'function' ? container() : container
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/base-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/base-ui/react-portal/components-api/#portal)
 */
const PortalComponent = (props: PortalProps, forwardedRef: React.ForwardedRef<Element>) => {
	const { children, container, disablePortal = false } = props
	const [mountNode, setMountNode] = React.useState<ReturnType<typeof getContainer>>(null)
	// @ts-expect-error TODO upstream fix
	const handleRef = useForkRef(React.isValidElement(children) ? children.ref : null, forwardedRef)

	useEnhancedEffect(() => {
		if (!disablePortal) {
			setMountNode(getContainer(container) || document.body)
		}
	}, [container, disablePortal])

	useEnhancedEffect(() => {
		if (mountNode && !disablePortal) {
			setRef(forwardedRef, mountNode)
			return () => {
				setRef(forwardedRef, null)
			}
		}

		return undefined
	}, [forwardedRef, mountNode, disablePortal])

	if (disablePortal) {
		if (React.isValidElement(children)) {
			const newProps = {
				ref: handleRef,
			}
			return React.cloneElement(children, newProps)
		}
		return children
	}

	return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
}

export const Portal = React.forwardRef(PortalComponent) as React.ForwardRefExoticComponent<
	PortalProps & React.RefAttributes<Element>
>
