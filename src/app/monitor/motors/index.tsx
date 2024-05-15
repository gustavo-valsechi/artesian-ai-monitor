"use client"

import React from 'react'
import { Container } from './styles'
import Utils from '@/utils'
import Image from 'next/image'
import _ from 'lodash'

import motorIcon from "@/assets/motor.png"

export default function Motors({ data }: any) {
    return (
        <Container>
            {_.map(data.content, (motor: any, index) =>
                <div key={index} className="content">
                    <div className="content-left">
                        <Image priority src={motorIcon} alt={motor.name} />
                    </div>
                    <div className="content-right">
                        <div className="content-header">
                            <div className="content-info">
                                <span>{motor.model}</span>
                                <span>{motor.name}</span>
                            </div>
                            <div
                                className="content-status"
                                data-status={motor.status}
                            >
                                {_.lowerCase(motor.status)}
                            </div>
                        </div>
                        <div className="content-footer">
                            <div className="content-params">
                                {_.map(Utils.format.params(motor), (value: string, key: string) =>
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