"use client"

import React, { useState } from 'react'
import { Container } from './styles'
import { ApexOptions } from 'apexcharts'
import { useTheme } from '@/contexts/theme'
import dynamic from 'next/dynamic'
import _ from 'lodash'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function Chart(props: any) {

    const { content: themeContent } = useTheme()

    const [toggle, setToggle] = useState(false)

    const motors = props.data?.motors?.content || []
    const monitor = props.data?.variables?.content || []

    const options: ApexOptions = {
        colors: ['#42d4de', '#877cf2', '#fa8373'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2, },
        fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        xaxis: { categories: _.map(monitor, (data) => data.timestamp), labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } } },
        yaxis: {
            min: props.min,
            max: props.max,
            labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } }
        },
    }

    const series = _.map(motors, (motor) => ({
        name: motor.name,
        data: _.map(monitor, (data) => data?.[motor.id]?.[props.name] || 0),
    }))

    return (
        <Container toggle={toggle}>
            <div
                className="chart-header"
                onClick={() => setToggle(!toggle)}
            >
                <div className="chart-header-label">
                    {!!props.icon && <i aria-hidden className={props.icon} />}
                    <span>{props.label}</span>
                </div>
                <i
                    aria-hidden
                    className={toggle ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}
                />
            </div>
            {toggle &&
                <div className="chart-body">
                    <ApexChart
                        options={options}
                        series={series}
                        type="area"
                        height={200}
                        width="100%"
                    />
                </div>}
        </Container>
    )
}