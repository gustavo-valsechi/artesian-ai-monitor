"use client"

import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Chart } from '@/components'
import chroma from 'chroma-js'
import moment from 'moment'
import _ from 'lodash'

export default function ChartVariables(props: any) {

    const [toggle, setToggle] = useState(false)
    const [colors, setColors] = useState([])

    const motors = props.data?.motors?.content || []
    const monitor = props.data?.variables?.content || []

    useEffect(() => {
        getColors()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getColors = () => {
        const base = chroma.random()

        const chromaColors: any = chroma
            .scale([base, base.set('hsl.h', '+120')])
            .mode('lab')
            .colors(motors.length)

        setColors(chromaColors)
    }

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
                    <Chart
                        content={monitor}
                        xAxis={(data) => moment(data.timestamp).subtract(3, 'hours').format("DD/MM HH:mm:ss")}
                        yAxis={_.fromPairs(_.map(motors, (motor) => [
                            motor.descricao,
                            (data) => data?.id_motor === motor.id_motor ? _.round(data?.[props.name] || 0, 2) : 0
                        ]))}
                        colors={colors}
                    />
                </div>}
        </Container>
    )
}