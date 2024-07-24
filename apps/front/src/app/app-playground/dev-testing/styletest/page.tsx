import { Box } from '@page/app-playground/dev-testing/styletest/Box'
import { PassPropsTest } from '@page/app-playground/dev-testing/styletest/PassPropsTest'

export default function Page() {
	return (
		<>
			<Box mx={2} />
			<PassPropsTest />
		</>
	)
}
