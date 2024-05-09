import React, { useState } from 'react'
import { Container } from './styles'
import { Modal } from '@/components'
import { removeMotor } from '@/api'

export default function ModalRemove(props: any) {

    const [removing, setRemoving] = useState(false)

    const content = props.modal.value.content || {}

    const close = () => {
        props.modal.set({ is: false, content: {} })
    }

    const onSubmit = async (data: any) => {
        setRemoving(true)

        await removeMotor(content.id)

        await props.fetch(0)

        setRemoving(false)

        close()
    }

    return (
        <Modal
            center
            toggle={!!props.modal.value.is}
            onClose={close}
            buttons={[
                {
                    label: "remover",
                    type: "submit",
                    onClick: onSubmit,
                    loading: removing,
                },
                {
                    label: "cancelar",
                    transparent: true,
                    onClick: close,
                    disabled: removing
                }
            ]}
        >
            <Container>
                <span>Tem certeza?</span>
                <span>Ao remover o motor, todos os dados armazenados do mesmo serão perdidos</span>
            </Container>
        </Modal>
    )
}