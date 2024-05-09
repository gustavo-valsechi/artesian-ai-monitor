"use client"

import React, { useState } from 'react'
import { Container } from './styles'
import { ApexOptions } from 'apexcharts'
import { useTheme } from '@/contexts/theme'
import dynamic from 'next/dynamic'
import _ from 'lodash'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function ChartFlow(props: any) {

    const { content: themeContent } = useTheme()

    const [toggle, setToggle] = useState(false)

    const monitor = props.data?.monitor?.content || []

    const options: ApexOptions = {
        colors: [themeContent.secondary],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2, },
        fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        xaxis: { categories: _.map(monitor, (data) => data.timestamp), labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } } },
        yaxis: { labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } } },
    }

    const series = [{
        name: "Vazão",
        data: _.map(monitor, (data) => data?.flow || 0),
    }]

    return (
        <Container toggle={toggle}>
            <div
                className="chart-header"
                onClick={() => setToggle(!toggle)}
            >
                <div className="chart-header-label">
                    <i aria-hidden className="fa-solid fa-code-commit" />
                    <span>Vazão</span>
                </div>
            </div>
            <div className="chart-body">
                <ApexChart
                    options={options}
                    series={series}
                    type="area"
                    height={200}
                    width="100%"
                />
            </div>
        </Container>
    )
}