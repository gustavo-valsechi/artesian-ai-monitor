"use client"

import React, { useEffect, useState } from "react"
import { Container } from "./styles"
import { getMonitor } from "@/api"
import _ from "lodash"

import Alert from "./alert"
import Flow from "./flow"
import Motors from "./motors"
import Variable from "./variable"

export default function MonitorClient(props: any) {

  const [data, setData] = useState(props.data)
  const [fetcher, setFetcher] = useState(0)

  useEffect(() => {
    setTimeout(async () => {
      const monitor = await getMonitor()

      const concat = (oldData: any, newData: any) => {

        if (oldData.content?.length === 10) oldData.content.shift()

        return {
          content: _.concat(oldData.content, newData.content),
          total: oldData.total + newData.total,
          totalPage: newData.totalPage,
        }
      }

      setData({
        ...data,
        monitor: concat(data.monitor, monitor),
      })

      setFetcher(fetcher + 1)
    }, 1000)
  }, [fetcher])

  return (
    <Container>
      <Alert data={data.alerts} />
      <Flow data={data} />
      <Motors data={data.motors} />
      <Variable icon="fa-solid fa-wave-square" label="Frequência" name="frequency" data={data} />
      <Variable icon="fa-solid fa-wave-square" label="Tensão" name="voltage" data={data} />
      <Variable icon="fa-solid fa-wave-square" label="Corrente" name="current" data={data} />
    </Container>
  )
}