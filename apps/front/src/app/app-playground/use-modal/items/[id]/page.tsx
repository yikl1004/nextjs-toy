'use client'

import { Modal } from '@page/app-playground/use-modal/Modal'

export default function Page({ params }: { params: { id: string } }) {
	return <Modal id={params.id} />
}
