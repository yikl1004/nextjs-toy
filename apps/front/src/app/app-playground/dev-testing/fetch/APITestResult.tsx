'use client'

interface APITestResultProps {
	onClick(): void
	isSuccess: boolean
	isError: boolean
}

export const APITestResult = ({ onClick, isError, isSuccess }: APITestResultProps) => {
	return (
		<>
			<button type="button" onClick={onClick}>
				refetch
			</button>
			<span className="is-success">isSuccess : {JSON.stringify(isSuccess)}</span>/
			<span className="is-error">isError : {JSON.stringify(isError)}</span>
		</>
	)
}
