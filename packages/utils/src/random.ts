export const random = (min: number, max: number) => {
	if (min >= max) {
		throw new Error('[min]은 [max]보다 크거나 같을 수 없습니다.')
	}

	const minNum = Math.ceil(min)
	const maxNum = Math.floor(max)
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}
