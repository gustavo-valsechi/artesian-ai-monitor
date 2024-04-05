"use client"

import React from "react"
import { Container } from "./styles"

// import { getDashboards, removeDashboard } from "@/api/dashboard"

import Chart from "./chart"

export default function DashboardClient({ data }: any) {
  return (
    <Container>
      <div className="dashboard-label">
        <span>Dashboard</span>
      </div>
      <div className="dashboard-content">
        <Chart />
      </div>
    </Container>
  )
}