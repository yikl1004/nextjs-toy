import { forwardRef } from 'react'

export const CustomInput = forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(
	({ value, onClick }, ref) => {
		return (
			<button type="button" className="example-custom-input" onClick={onClick} ref={ref}>
				{value}
			</button>
		)
	},
)

CustomInput.displayName = 'CustomInput'
