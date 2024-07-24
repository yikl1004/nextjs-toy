import styled from '@emotion/styled'

const CodePreviewStyled = styled('div')`
	overflow-x: auto;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.color.white};
	color-scheme: dark;
`

type CodePreviewProps = React.PropsWithChildren

export function CodePreview({ children }: CodePreviewProps) {
	return (
		<CodePreviewStyled>
			<pre>{children}</pre>
		</CodePreviewStyled>
	)
}
