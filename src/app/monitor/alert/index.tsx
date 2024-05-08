"use client"

import React, { useState } from 'react'
import { Container } from './styles'
import _ from 'lodash'

export default function Alert({ data }: any) {

    const [content, setContent] = useState(_.filter(data.content, ({ read }) => !read))

    return (
        <Container>
            {_.map(content, (alert: any, index) =>
                <div key={index} className="alert-container">
                    <span>{alert.title}</span>
                    <span>{alert.message}</span>
                    <div onClick={() => setContent(_.filter(content, ({ id }: any) => id !== alert.id))}>
                        <i aria-hidden className='fa-solid fa-xmark' />
                    </div>
                </div>
            )}
        </Container>
    )
}