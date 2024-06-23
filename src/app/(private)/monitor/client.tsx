"use client"

import React, { useEffect, useState } from "react"
import { Container } from "./styles"
import { DPagination, getFaultDetections, getFlowMonitor, getVariablesMonitor } from "@/app/api"
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
      const faultDetection = await getFaultDetections()
      const variables = await getVariablesMonitor()

      const concat = (oldData: any = DPagination, newData: any = DPagination) => {

        if (newData.content?.length <= 10 || JSON.stringify(oldData) === JSON.stringify(newData)) return newData

        return {
          content: _.takeRight(_.concat(oldData.content, newData.content), 10),
          total: (oldData.total || 0) + (newData.total || 0),
          totalPage: (newData.totalPage || 1),
        }
      }

      setData({
        ...data,
        flow: concat(data.flow, flow),
        faultDetection: concat(data.faultDetection, faultDetection),
        variables: concat(data.variables, variables),
      })

      setFetcher(fetcher + 1)
    }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher])

  return (
    <Container>
      <Motors data={data} />
      <FaultDetection data={data?.motors?.content?.length ? data.faultDetection : DPagination} />
      {/*<Flow data={data?.motors?.content?.length ? data.flow : DPagination} />*/}
      <Variable
        icon="fa-solid fa-wave-square"
        label="Frequência"
        name="frequencia" data={data}
        min={50}
        max={70}
      />
      <Variable
        icon="fa-solid fa-wave-square"
        label="Tensão"
        name="tensao_entrada"
        data={data}
        min={300}
        max={500}
      />
      <Variable
        icon="fa-solid fa-wave-square"
        label="Corrente"
        name="corrente"
        data={data}
        min={10}
        max={30}
      />
    </Container>
  )
}