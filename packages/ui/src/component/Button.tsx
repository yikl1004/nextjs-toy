'use client'

import { useState } from 'react'
import styled from '@emotion/styled'
import { padding } from '@repo/utils/emotion'

const ButtonStyled = styled('button')`
	border-radius: 0.5rem;
	${padding({ y: 1, x: 3 })}
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;

	&.kind-default {
		background-color: ${({ theme }) => theme.color.gray700};
		color: ${({ theme }) => theme.color.gray100};

		/* @media hover */
		${({ theme }) => theme.mediaQueries.hover} {
			&:hover {
				background-color: ${({ theme }) => theme.color.gray500};
				color: ${({ theme }) => theme.color.white};
			}
		}
	}

	&.kind-error,
	&.kind-buggy {
		background-color: ${({ theme }) => theme.color.vercel_pink};
		color: ${({ theme }) => theme.color.text.red50};

		/* @media hover */
		${({ theme }) => theme.mediaQueries.hover} {
			&:hover {
				background-color: ${({ theme }) => theme.color.bg.pink600};
				color: ${({ theme }) => theme.color.white};
			}
		}
	}
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: React.ElementType } & (
		| {
				kind?: 'default' | 'error' | 'buggy' | undefined
				href?: undefined
		  }
		| {
				kind: 'link'
				href: string
		  }
	)

export function Button({ kind = 'default', onClick, ...props }: ButtonProps) {
	const [clicked, setClicked] = useState(false)

	if (clicked && kind === 'buggy') {
		throw new Error('Oh no! Something went wrong.')
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (kind === 'buggy') {
			setClicked(true)
		}

		if (typeof onClick === 'function') {
			onClick(event)
		}
	}

	return (
		<ButtonStyled type="button" className={`kind-${kind}`} onClick={handleClick} {...props} />
	)
}
