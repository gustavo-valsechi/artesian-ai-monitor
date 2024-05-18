"use client"

import React from 'react'
import { Container } from './styles'
import { ApexOptions } from 'apexcharts'
import { useTheme } from '@/contexts/theme'
import dynamic from 'next/dynamic'
import _ from 'lodash'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function Chart(props: any) {

    const { content: themeContent } = useTheme()

    const monitor = props.content || []

    const series = _.map(props.yAxis, (value, key) => ({
        name: key || "",
        data: _.map(monitor, (data) => _.isFunction(value) ? value(data) : 0),
    }))

    const options: ApexOptions = {
        colors: _.map(props.colors || [], (value) => themeContent[value] || value || themeContent.secondary),
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2, },
        fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        yaxis: {
            min: props.min,
            max: props.max,
            labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } }
        },
        xaxis: {
            categories: _.map(monitor, (data) => _.isFunction(props.xAxis) ? props.xAxis(data) : ""),
            labels: { style: { colors: _.map(monitor, () => themeContent.transparent_6) } }
        },
    }

    return (
        <Container>
            <ApexChart
                options={options}
                series={series}
                type="area"
                height={props.height || 200}
                width="100%"
            />
        </Container>
    )
}