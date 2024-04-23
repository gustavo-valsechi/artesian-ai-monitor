"use client"

import React from 'react'
import { Container } from './styles'
import Image from 'next/image'
import _ from 'lodash'

import motor from "./motor.png"

export default function Motors(props: any) {

    const motors = [
        { name: "Motor 1", model: "MotorX-5000", rpm: 3450, hp: 5, voltage: 220, current: 15, frequency: 60, status: "INSTAVEL" },
        { name: "Motor 2", model: "MotorY-7000", rpm: 3450, hp: 5, voltage: 220, current: 15, frequency: 60, status: "ESTAVEL" },
        { name: "Motor 3", model: "MotorZ-10000", rpm: 3450, hp: 5, voltage: 220, current: 15, frequency: 60, status: "INSTAVEL" },
    ]

    return (
        <Container>
            {_.map(motors, (data, index) =>
                <div key={index} className="content">
                    <div className="content-left">
                        <Image src={motor} alt={data.name} />
                    </div>
                    <div className="content-right">
                        <div className="content-info">
                            <span>{data.model}</span>
                            <span>{data.name}</span>
                        </div>
                        <div
                            className="content-status"
                            data-status={data.status}
                        >
                            {_.lowerCase(data.status)}
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}