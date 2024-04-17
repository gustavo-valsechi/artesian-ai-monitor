"use client"

import React from "react"
import { Container } from "./styles"

// import { getMonitors, removeMonitor } from "@/api/monitor"

export default function MonitorClient({ data }: any) {
  return (
    <Container>
      <div className="monitor-label">
        <span>Alertas</span>
      </div>
      <div className="monitor-content">

      </div>
    </Container>
  )
}