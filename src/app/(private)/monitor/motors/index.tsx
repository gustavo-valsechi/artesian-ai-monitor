"use client"

import React from 'react'
import { Container } from './styles'
import Utils from '@/utils'
import Image from 'next/image'
import _ from 'lodash'

import motorIcon from "@/assets/motor.png"

export default function Motors({ data }: any) {

    const motors = data?.motors?.content || []
    const monitor = data?.variables?.content || []

    return (
        <Container>
            {!!motors.length
                ? _.map(motors, (motor: any, index) =>
                    <div key={index} className="content">
                        <div className="content-left">
                            <Image priority src={motorIcon} alt={motor.tag} />
                        </div>
                        <div className="content-right">
                            <div className="content-header">
                                <div className="content-info">
                                    <span>#{motor.tag}</span>
                                    <span>{motor.descricao}</span>
                                </div>
                                <div
                                    className="content-status"
                                    data-status={!!motor.status ? "ATIVO" : "DESATIVADO"}
                                >
                                    {_.lowerCase(!!motor.status ? "ATIVO" : "DESATIVADO")}
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
                )
                : <div className='motors-not-found'>
                    Nenhum motor encontrado para monitorar
                </div>}
        </Container>
    )
}