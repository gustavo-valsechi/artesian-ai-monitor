"use client"

import React, { useState } from 'react'
import { Container } from './styles'
import _ from 'lodash'

export default function Alert(props: any) {

    const [content, setContent] = useState([
        {
            id: "1",
            title: "Motor 1 com variação na vibração",
            message: "Ocorreu uma variação brusca no Motor 1 na leitura da vibração, verifique se os componentes dele estão funcionando adequadamente"
        },
        {
            id: "2",
            title: "Motor 3 com variação na corrente",
            message: "Ocorreu uma variação brusca no Motor 1 na leitura da corrente, verifique se o eixo do motor esta lubrificado adequadamente ou se o cabeamento esta isolado de forma correta"
        },
    ])

    return (
        <Container>
            {_.map(content, (data, index) =>
                <div key={index} className="alert-container">
                    <span>{data.title}</span>
                    <span>{data.message}</span>
                    <div onClick={() => setContent(_.filter(content, ({ id }) => id !== data.id))}>
                        <i className='fa-solid fa-xmark' />
                    </div>
                </div>
            )}
        </Container>
    )
}