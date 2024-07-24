import { Title, Spacer } from '@repo/ui'
import { VideoPlayer } from '@components/common/VideoPlayer'

export default function Page() {
	return (
		<Spacer vertical={5}>
			<Title>Ceremony</Title>
			<VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
		</Spacer>
	)
}
