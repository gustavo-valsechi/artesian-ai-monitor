"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Badge, Table } from "@/components"

import alerts from "./content.json"

// import { getMonitors, removeMonitor } from "@/api/monitor"

export default function MonitorClient({ data }: any) {

  const [modal, setModal] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState({
    content: alerts,
    totalPage: 1
  })

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    // const data = await getMonitors({
    //   offset: page,
    //   order: { dhOperation: "DESC" }
    // })

    // setContent(data)
    setLoading(false)
  }

  const details = (data: any) => {
    setModal({
      is: true,
      content: data
    })
  }

  return (
    <Container>
      <div className="monitor-label">
        <span>Alertas</span>
      </div>
      <div className="monitor-content">
        <Table
          loading={loading}
          content={content?.content}
          paginate={{
            total: content?.totalPage,
            page: {
              value: page,
              set: fetch
            }
          }}
          notFound={{
            title: "Nenhum cliente encontrado",
            message: "Adicione um cliente para aparecer algum registro"
          }}
          options={[
            {
              column: {
                action: {
                  icon: `fa-solid fa-arrows-rotate ${loading ? "fa-spin" : ""}`,
                  disabled: loading,
                  function: () => fetch(0),
                  position: "left"
                }
              },
              row: {
                image: {
                  icon: (data: any) => data.read
                    ? "fa-regular fa-bell"
                    : "fa-solid fa-bell"
                }
              }
            },
            { column: "Título", row: "title" },
            { column: "Mensagem", row: "message" },
            {
              column: "Situação", row: { custom: (data) => <Badge value={data.status} /> }
            },
            {
              column: { style: { width: "2.3rem" } },
              row: { actions: [{ icon: "fa-solid fa-file-lines", function: (data) => details(data), tooltip: "Detalhes" }] }
            },
          ]}
        />
      </div>
    </Container>
  )
}