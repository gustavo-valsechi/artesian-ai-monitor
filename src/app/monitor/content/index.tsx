"use client"

import React from 'react'
import { Container } from './styles'
import { ApexOptions } from 'apexcharts'
import ApexChart from "react-apexcharts"
import _ from 'lodash'

export default function Content(props: any) {

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
        xaxis: { categories: _.map(content, (data) => data.timestamp) },
        legend: { show: false },
        chart: { toolbar: { show: false } }
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
        <Container>
            <div className="content-info">

            </div>
            <ApexChart
                options={options}
                series={series}
                type="area"
                height={300}
            />
        </Container>
    )
}