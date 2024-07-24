import { useRecoilState } from 'recoil'
// import { useCookies } from 'react-cookie'
import { devState /** devStateKey */ } from '@store/dev'

export const useDevControl = () => {
	const [state, setState] = useRecoilState(devState)
	// const [cookie] = useCookies([devStateKey])

	return { state, setState }
}
