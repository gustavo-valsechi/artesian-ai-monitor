import React, { useState } from 'react'
import { Container } from './styles'
import { Form, Modal } from '@/components'
import { saveMotor } from '@/api'
import { z } from 'zod'
import _ from 'lodash'

export default function ModalSave(props: any) {

    const [saving, setSaving] = useState(false)

    const content = props.modal.value.content || {}

    const close = () => {
        props.modal.set({ is: false, content: {} })
    }

    const onSubmit = async (data: any) => {
        setSaving(true)

        await saveMotor({ ...data, "id": content.id })

        await props.fetch(0)

        setSaving(false)

        close()
    }

    return (
        <Modal
            center
            toggle={!!props.modal.value.is}
            onClose={close}
            header={{
                icon: "fa-solid fa-bullseye",
                title: content.id ? "Editar motor" : "Adicionar motor"
            }}
        >
            <Container>
                <Form
                    onSubmit={onSubmit}
                    initialValues={{
                        "id": content.id || "",
                        "name": content.name || "",
                        "model": content.model || "",
                        "power": String(content.power || ""),
                        "voltage": String(content.voltage || ""),
                        "current": String(content.current || ""),
                        "frequency": String(content.frequency || ""),
                    }}
                    inputs={[
                        {
                            name: "name",
                            label: "Nome",
                            disabled: saving,
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 255,
                            required: true
                        },
                        {
                            name: "model",
                            label: "Modelo",
                            disabled: saving,
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 255,
                            required: true
                        },
                        {
                            name: "power",
                            label: "Potência",
                            disabled: saving,
                            mask: (value: string) => _.replace(value, /\D/g, ""),
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        },
                        {
                            name: "voltage",
                            label: "Tensão",
                            disabled: saving,
                            mask: (value: string) => _.replace(value, /\D/g, ""),
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        },
                        {
                            name: "current",
                            label: "Corrente",
                            disabled: saving,
                            mask: (value: string) => _.replace(value, /\D/g, ""),
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        },
                        {
                            name: "frequency",
                            label: "Frequência",
                            disabled: saving,
                            mask: (value: string) => _.replace(value, /\D/g, ""),
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        }
                    ]}
                    buttons={[
                        {
                            label: content.id ? "salvar" : "adicionar",
                            type: "submit",
                            loading: saving
                        },
                        {
                            label: "cancelar",
                            transparent: true,
                            onClick: close,
                            disabled: saving
                        }
                    ]}
                />
            </Container>
        </Modal>
    )
}