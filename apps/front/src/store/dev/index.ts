import { type RecoilState, atom, type AtomEffect } from 'recoil'
import { getCookie, deleteCookie, setCookie } from 'cookies-next'
// import { recoilPersist } from 'recoil-persist'

// const { persistAtom } = recoilPersist()

/** types */
interface IDevState {}

export const devStateKey = '#dev' as const

const devStateCookies: AtomEffect<IDevState> = ({ setSelf, onSet }) => {
	// setSelf 함수는 초기값 지정. onSet함수는 값이 변경될 때마다 값을 동기화
	const savedValue = getCookie(devStateKey)

	if (savedValue) {
		setSelf(savedValue)
	}

	onSet((newValue, _, isReset) => {
		if (isReset) {
			deleteCookie(devStateKey)
		} else {
			setCookie(devStateKey, newValue)
		}
	})
}

/** atom */
export const devState: RecoilState<IDevState> = atom<IDevState>({
	key: devStateKey,
	default: {},
	// effects_UNSTABLE: [persistAtom],
	effects: [devStateCookies],
})
