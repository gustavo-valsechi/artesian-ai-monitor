"use client"

import React from "react"
import { Container } from "./styles"

// import { getMonitors, removeMonitor } from "@/api/monitor"

import Alert from "./alert"
import Chart from "./chart"

export default function MonitorClient({ data }: any) {
  return (
    <Container>
      <div className="monitor-label">
        <span>Monitoramento</span>
      </div>
      <div className="monitor-content">
        <Alert />
        <Chart />
      </div>
    </Container>
  )
}