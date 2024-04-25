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

    const content = [
        { timestamp: "04/04/2024 15:40", engineOne: _.random(true), engineTwo: _.random(true), engineThree: _.random(true) },
        { timestamp: "04/04/2024 15:45", engineOne: _.random(true), engineTwo: _.random(true), engineThree: _.random(true) },
        { timestamp: "04/04/2024 15:50", engineOne: _.random(true), engineTwo: _.random(true), engineThree: _.random(true) },
        { timestamp: "04/04/2024 15:55", engineOne: _.random(true), engineTwo: _.random(true), engineThree: _.random(true) },
        { timestamp: "04/04/2024 16:00", engineOne: _.random(true), engineTwo: _.random(true), engineThree: _.random(true) },
        { timestamp: "04/04/2024 16:05", engineOne: _.random(true), engineTwo: _.random(true), engineThree: _.random(true) },
        { timestamp: "04/04/2024 16:10", engineOne: _.random(true), engineTwo: _.random(true), engineThree: _.random(true) },
    ]

    const options: ApexOptions = {
        colors: ['#42d4de', '#877cf2', '#fa8373'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2, },
        fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        xaxis: { categories: _.map(content, (data) => data.timestamp), labels: { style: { colors: _.map(content, () => themeContent.transparent_6) } } },
        yaxis: { labels: { style: { colors: _.map(content, () => themeContent.transparent_6) } } },
    }

    const series = [
        {
            name: "Motor 1",
            data: _.map(content, (data) => _.round(data.engineOne, 4)),
        },
        {
            name: "Motor 2",
            data: _.map(content, (data) => _.round(data.engineTwo, 4)),
        },
        {
            name: "Motor 3",
            data: _.map(content, (data) => _.round(data.engineThree, 4)),
        },
    ]

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