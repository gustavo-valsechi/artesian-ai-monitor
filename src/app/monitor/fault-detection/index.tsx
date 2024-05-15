"use client"

import React, { useState } from 'react'
import { Container } from './styles'
import { ApexOptions } from 'apexcharts'
import { useTheme } from '@/contexts/theme'
import dynamic from 'next/dynamic'
import moment from 'moment'
import _ from 'lodash'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function ChartFaultDetection(props: any) {

    const { content: themeContent } = useTheme()

    const [toggle, setToggle] = useState(false)

    const monitor = props.data?.content || []

    const options: ApexOptions = {
        colors: [themeContent.negative],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2, },
        fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        yaxis: {
            min: 0,
            max: 1,
            labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } }
        },
        xaxis: {
            categories: _.map(monitor, (data) => moment(data.timestamp).format("DD/MM HH:mm:ss")),
            labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } }
        },
    }

    const series = [{
        name: "Falha",
        data: _.map(monitor, (data) => 0),
    }]

    return (
        <Container toggle={toggle}>
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
                <ApexChart
                    options={options}
                    series={series}
                    type="area"
                    height={120}
                    width="100%"
                />
            </div>
        </Container>
    )
}