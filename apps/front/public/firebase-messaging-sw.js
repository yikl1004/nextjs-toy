importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js')
// import { initializeApp } from 'firebase/app'
// import { getMessaging } from 'firebase/messaging'

// FIXME: 이미 만료된 테스트 키 입니다. 개발용 키로 수정해주세요.
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCb3sWDKxKO6eX73UUTFXR6GzD-0plGwkU',
	authDomain: 'mytest-8b33b.firebaseapp.com',
	databaseURL: 'https://mytest-8b33b.firebaseio.com',
	projectId: 'mytest-8b33b',
	storageBucket: 'mytest-8b33b.appspot.com',
	messagingSenderId: '237608953386',
	appId: '1:237608953386:web:fb48036cc61dc66f810553',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message ', payload)
	const notificationTitle = payload.notification.title
	const notificationOptions = {
		body: payload.notification.body,
		icon: './logo.png',
	}
	self.registration.showNotification(notificationTitle, notificationOptions)
})

// 푸시 이벤트 처리
// 푸시 내용을 처리해서 알림으로 띄운다.
self.addEventListener('push', function (event) {
	if (event.data) {
		console.log(event.data.json())
		// 알림 메세지일 경우엔 event.data.json().notification;
		const data = event.data.json().notification
		const options = {
			title: data.title,
			body: data.body,
			icon: data.image,
			image: data.image,
			data: {
				click_action: data.click_action, // 이 필드는 밑의 클릭 이벤트 처리에 사용됨
			},
		}

		event.waitUntil(self.registration.showNotification(data.title, options))
	} else {
		console.log('This push event has no data.')
	}
})

// 클릭 이벤트 처리
// 알림을 클릭하면 사이트로 이동한다.
self.addEventListener('notificationclick', function (event) {
	event.preventDefault()
	// 알림창 닫기
	event.notification.close()

	// 이동할 url
	// 아래의 event.notification.data는 위의 푸시 이벤트를 한 번 거쳐서 전달 받은 options.data에 해당한다.
	// api에 직접 전달한 데이터와 혼동 주의
	const urlToOpen = event.notification.data.click_action

	// 클라이언트에 해당 사이트가 열려있는지 체크
	const promiseChain = clients
		.matchAll({
			type: 'window',
			includeUncontrolled: true,
		})
		.then(function (windowClients) {
			let matchingClient = null

			for (let i = 0; i < windowClients.length; i++) {
				const windowClient = windowClients[i]
				if (windowClient.url.includes(urlToOpen)) {
					matchingClient = windowClient
					break
				}
			}

			// 열려있다면 focus, 아니면 새로 open
			if (matchingClient) {
				return matchingClient.focus()
			} else {
				return clients.openWindow(urlToOpen)
			}
		})

	event.waitUntil(promiseChain)
})
