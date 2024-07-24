import { useCallback } from 'react'
import { type RecoilState, atom, useRecoilState } from 'recoil'

interface IGnbState {
	toggle: boolean
}

export const gnbState: RecoilState<IGnbState> = atom<IGnbState>({
	key: '#gnb',
	default: {
		toggle: false,
	},
})

export const useGnbControl = () => {
	const [state, setState] = useRecoilState(gnbState)

	const toggle = useCallback(
		(value?: boolean) => {
			if (value) {
				setState({ toggle: value })
			} else {
				setState({ toggle: !state })
			}
		},
		[setState, state],
	)

	return { state, toggle }
}
