"use client"

import React, { useEffect, useState } from "react"
import { Container } from "./styles"
import { getFlowMonitor, getMonitor } from "@/api"
import _ from "lodash"

import FaultDetection from "./fault-detection"
import Flow from "./flow"
import Motors from "./motors"
import Variable from "./variable"

export default function MonitorClient(props: any) {

  const [data, setData] = useState(props.data)
  const [fetcher, setFetcher] = useState(0)

  useEffect(() => {
    setTimeout(async () => {
      const flow = await getFlowMonitor()
      const monitor = await getMonitor()

      const concat = (oldData: any, newData: any) => {
        return {
          content: _.takeRight(_.concat(oldData.content, newData.content), 10),
          total: (oldData.total || 0) + (newData.total || 0),
          totalPage: (newData.totalPage || 1),
        }
      }

      setData({
        ...data,
        flow: concat(data.flow, flow),
        monitor: concat(data.monitor, monitor),
      })

      setFetcher(fetcher + 1)
    }, 5000)
  }, [fetcher])

  return (
    <Container>
      <Motors data={data.motors} />
      <FaultDetection data={data.flow} />
      <Flow data={data.flow} />
      <Variable icon="fa-solid fa-wave-square" label="Frequência" name="frequency" data={data} />
      <Variable icon="fa-solid fa-wave-square" label="Tensão" name="voltage" data={data} />
      <Variable icon="fa-solid fa-wave-square" label="Corrente" name="current" data={data} />
    </Container>
  )
}