"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Table } from "@/components"

import { DCredentials, getAlerts } from "@/api"

export default function AlertClient({ data }: any) {

  const [modal, setModal] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<any>(data)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getAlerts({ ...DCredentials, offset: page })

    setContent(data)
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
          title: "Nenhum alerta encontrado",
          message: "Nenhuma ocorrência encontrada pelo monitoramento"
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
          {
            column: "Título",
            row: {
              name: "title",
              style: (data) => data.read
                ? { fontWeight: 400 }
                : { fontWeight: 600 }
            },
          },
          {
            column: "Mensagem",
            row: {
              name: "message",
              style: (data) => data.read
                ? { fontWeight: 400 }
                : { fontWeight: 600 }
            },
          },
          {
            column: "Data",
            row: "timestamp"
          },
          {
            column: { style: { width: "2.3rem" } },
            row: {
              actions: [
                {
                  icon: "fa-solid fa-file-lines",
                  function: (data) => details(data),
                  tooltip: "Detalhes"
                }
              ]
            }
          },
        ]}
      />
    </Container>
  )
}