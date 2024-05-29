"use client"

import React from 'react'
import { Container } from './styles'
import { Chart } from '@/components'
import moment from 'moment'
import _ from 'lodash'

export default function ChartFlow(props: any) {

    const monitor = props.data?.content || []

    return (
        <Container>
            <div className="chart-header">
                <div className="chart-header-label">
                    <i aria-hidden className="fa-solid fa-code-commit" />
                    <span>Vazão</span>
                </div>
            </div>
            <div className="chart-body">
                <Chart
                    content={monitor}
                    xAxis={(data) => moment(data.timestamp).subtract(3, 'hours').format("DD/MM HH:mm:ss")}
                    yAxis={{ "Vazão": (data) => _.round(data?.vazao_registrada || 0, 3) }}
                    colors={["secondary"]}
                    min={20}
                    max={26}
                />
            </div>
        </Container>
    )
}