'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface VideoPlayerProps {
	src: string
}

export const VideoPlayer = ({ src }: VideoPlayerProps) => {
	const scriptId = 'custom-video-player-script'
	// const vodContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!document.querySelector(`#${scriptId}`)) {
			const script = document.createElement('script')
			script.id = scriptId
			script.src = process.env.NEXT_PUBLIC_VIDEO_PLAYER_SCRIPT_URL
			script.type = 'module'
			script.defer = true

			document.head.appendChild(script)
		}
	}, [])

	return (
		<>
			<Script stylesheets={[process.env.NEXT_PUBLIC_VIDEO_PLAYER_STYLESHEET_URL]} />
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<video
				id="my-video"
				className="video-js"
				controls
				preload="auto"
				width="640"
				height="264"
				poster="MY_VIDEO_POSTER.jpg"
				data-setup="{}"
			>
				<source src={src} type="video/mp4" />
				<p className="vjs-no-js">
					To view this video please enable JavaScript, and consider upgrading to a web
					browser that
					<a
						href="https://videojs.com/html5-video-support/"
						target="_blank"
						rel="noreferrer"
					>
						supports HTML5 video
					</a>
				</p>
			</video>
		</>
	)
}
