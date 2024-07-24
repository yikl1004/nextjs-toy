'use client'

import styled from '@emotion/styled'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TypographyProps {
	variant: Variant
	className?: string
	children: React.ReactNode
}

export const Typography = ({ variant, className, children }: TypographyProps) => {
	const Heading = styled(variant)``

	return <Heading className={className}>{children}</Heading>
}
