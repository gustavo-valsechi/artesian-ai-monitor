"use client"

import React, { useState } from 'react'
import { Container } from './styles'
import _ from 'lodash'

import alerts from "../../alerts/content.json"

export default function Alert(props: any) {

    const [content, setContent] = useState(alerts)

    return (
        <Container>
            {_.map(content, (data, index) =>
                <div key={index} className="alert-container">
                    <span>{data.title}</span>
                    <span>{data.message}</span>
                    <div onClick={() => setContent(_.filter(content, ({ id }) => id !== data.id))}>
                        <i aria-hidden className='fa-solid fa-xmark' />
                    </div>
                </div>
            )}
        </Container>
    )
}