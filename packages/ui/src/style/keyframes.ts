import { keyframes } from '@emotion/react'

export const highlight = keyframes`
    0% {
        background: #ff0080;
        color: #fff;
    }
    
    40% {
        background: #ff0080;
        color: #fff;
    }
`

export const renderer = keyframes`
    0% {
        border-color: #ff0080;
    }
    
    40% {
        border-color: #ff0080;
    }
`

export const shimmer = keyframes`
	100% {
		content: '';
		transform: translateX(100%);
	}
`

export const spin = keyframes`
	to {
		transform: rotate(360deg);
	}
`

export const loading = keyframes`
	0% {
		opacity: 0.2;
	}

	20% {
		opacity: 1;
		transform: translateX(1px);
	}

	to {
		opacity: 0.2;
	}
`

export const colorBounce = keyframes`
    from {
        color: rgb(56, 142, 60)
    }

    to {
        color: rgb(255, 255, 255)
    }
`
