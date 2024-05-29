import React from 'react'
import { Container } from './styles'
import { Modal } from '@/components'

export default function ModalDetails(props: any) {

    const content = props.modal.value.content || {}

    const close = () => {
        props.modal.set({ is: false, content: {} })
    }

    return (
        <Modal
            center
            toggle={!!props.modal.value.is}
            onClose={close}
            buttons={[
                {
                    label: "fechar",
                    onClick: close,
                }
            ]}
        >
            <Container>
                <span>{content.timestamp}</span>
                <span>{content.title}</span>
                <span>{content.message}</span>
            </Container>
        </Modal>
    )
}