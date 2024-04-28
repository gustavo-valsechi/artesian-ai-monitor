"use client"

import React from 'react'
import { Container } from './styles'
import Image from 'next/image'
import _ from 'lodash'

import motor from "./motor.png"

export default function Motors(props: any) {

    const motors = [
        { name: "Motor 1", model: "MotorX-5000", rpm: 3450, power: 3300, voltage: 220, current: 15, frequency: 60, status: "DESATIVADO" },
        { name: "Motor 2", model: "MotorY-7000", rpm: 3450, power: 3300, voltage: 220, current: 15, frequency: 60, status: "ATIVO" },
        { name: "Motor 3", model: "MotorZ-10000", rpm: 3450, power: 3300, voltage: 220, current: 15, frequency: 60, status: "DESATIVADO" },
    ]

    const property = {
        frequency: (value: number) => `${value}hz`,
        power: (value: number) => `${value}W`,
        voltage: (value: number) => `${value}V`,
        current: (value: number) => `${value}A`,
    }

    return (
        <Container>
            {_.map(motors, (data, index) =>
                <div key={index} className="content">
                    <div className="content-left">
                        <Image src={motor} alt={data.name} />
                    </div>
                    <div className="content-right">
                        <div className="content-header">
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
                        <div className="content-footer">
                            <div className="content-properties">
                                {_.map(data, (value, key) => !!property[key] &&
                                    <div key={key}>
                                        <span>
                                            {property[key](value)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}