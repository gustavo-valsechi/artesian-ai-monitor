"use client"

import React from "react"
import { Container } from "./styles"

// import { getMonitors, removeMonitor } from "@/api/monitor"

import Alert from "./alert"
import Motors from "./motors"
import Variable from "./variable"

export default function MonitorClient({ data }: any) {
  return (
    <Container>
      <div className="monitor-content">
        <Alert />
        <Motors />
        <Variable icon="fa-solid fa-wave-square" label="Frequência" />
        <Variable icon="fa-solid fa-wave-square" label="Tensão" />
        <Variable icon="fa-solid fa-wave-square" label="Corrente" />
      </div>
    </Container>
  )
}