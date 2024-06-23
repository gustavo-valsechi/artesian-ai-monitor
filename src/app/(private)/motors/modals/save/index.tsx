import React, { useState } from 'react'
import { Container } from './styles'
import { Form, Modal } from '@/components'
import { saveMotor } from '@/app/api'
import { z } from 'zod'
import Utils from '@/utils'
import _ from 'lodash'

export default function ModalSave(props: any) {

    const [saving, setSaving] = useState(false)

    const content = props.modal.value.content || {}

    const close = () => {
        props.modal.set({ is: false, content: {} })
    }

    const onSubmit = async (data: any) => {
        setSaving(true)

        await saveMotor({ ...data, "id_motor": content.id_motor })

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
                icon: "fa-solid fa-gear",
                title: content.id_motor ? "Editar motor" : "Adicionar motor"
            }}
        >
            <Container>
                <Form
                    onSubmit={onSubmit}
                    initialValues={{
                        "id_motor": content.id_motor || "",
                        "referencia": content.referencia || "",
                        "tag": content.tag || "",
                        "descricao": content.descricao || "",
                        "potencia": String(content.potencia || ""),
                        "tensao": String(content.tensao || ""),
                        "corrente": String(content.corrente || ""),
                        "frequencia": String(content.frequencia || ""),
                    }}
                    inputs={[
                        {
                            name: "referencia",
                            label: "Referência",
                            disabled: saving,
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 255,
                            required: true
                        },
                        {
                            name: "tag",
                            label: "Nome",
                            disabled: saving,
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 255,
                            required: true
                        },
                        {
                            name: "descricao",
                            label: "Descrição",
                            disabled: saving,
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 255,
                            required: true
                        },
                        {
                            name: "potencia",
                            label: "Potência (kW)",
                            disabled: saving,
                            mask: Utils.mask.kilo,
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        },
                        {
                            name: "tensao",
                            label: "Tensão (V)",
                            disabled: saving,
                            mask: (value: string) => _.replace(value, /\D/g, ""),
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        },
                        {
                            name: "corrente",
                            label: "Corrente (A)",
                            disabled: saving,
                            mask: (value: string) => _.replace(value, /\D/g, ""),
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        },
                        {
                            name: "frequencia",
                            label: "Frequência (hZ)",
                            disabled: saving,
                            mask: (value: string) => _.replace(value, /\D/g, ""),
                            validation: z.string({ required_error: "Campo obrigatório!" }),
                            maxLenght: 10,
                            required: true
                        }
                    ]}
                    buttons={[
                        {
                            label: content.id_motor ? "salvar" : "adicionar",
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