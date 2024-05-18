"use client"

import React, { useState } from 'react'
import { Container } from './styles'
import { Chart } from '@/components'
import dynamic from 'next/dynamic'
import moment from 'moment'
import _ from 'lodash'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function ChartFaultDetection(props: any) {

    const [toggle, setToggle] = useState(false)

    const monitor = props.data?.content || []

    return (
        <Container hasFault={_.some(monitor, (data) => !!data.previsao_registrada)}>
            <div
                className="chart-header"
                onClick={() => setToggle(!toggle)}
            >
                <div className="chart-header-label">
                    <i aria-hidden className="fa-solid fa-circle-exclamation" />
                    <span>Detecção de falhas</span>
                </div>
            </div>
            <div className="chart-body">
                <Chart
                    content={monitor}
                    xAxis={(data) => moment(data.timestamp).format("DD/MM HH:mm:ss")}
                    yAxis={{ "Falha": (data) => _.round(data?.previsao_registrada || 0, 3) }}
                    colors={["negative"]}
                    height={120}
                    min={0}
                    max={1}
                />
            </div>
        </Container>
    )
}