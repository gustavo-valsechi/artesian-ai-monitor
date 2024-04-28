"use client"

import React from 'react'
import { Container } from './styles'
import Utils from '@/utils'
import Image from 'next/image'
import _ from 'lodash'

import motorIcon from "@/assets/motor.png"
import motors from "../../motors/content.json"

export default function Motors(props: any) {
    return (
        <Container>
            {_.map(motors, (data, index) =>
                <div key={index} className="content">
                    <div className="content-left">
                        <Image src={motorIcon} alt={data.name} />
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
                                {_.map(Utils.format.property(data), (value: string, key: string) =>
                                    <div key={key}>
                                        <span>
                                            {value}
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