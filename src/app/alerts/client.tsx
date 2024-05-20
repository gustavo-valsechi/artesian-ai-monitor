"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Table } from "@/components"
import moment from "moment"

import { DCredentials, getFaultDetections } from "@/api"

import ModalDetails from "./modals/details"

export default function AlertClient({ data }: any) {

  const [modalDetails, setModalDetails] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<any>(data)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getFaultDetections({
      ...DCredentials,
      filters: { previsao_registrada: 1 },
      offset: page
    })

    setContent(data)
    setLoading(false)
  }

  return (
    <Container>
      <ModalDetails
        modal={{
          value: modalDetails,
          set: setModalDetails
        }}
      />
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
            row: { custom: (data) => moment(data.timestamp).format("DD/MM/YYYY HH:mm:ss") }
          },
          {
            column: { style: { width: "2.3rem" } },
            row: {
              actions: [
                {
                  icon: "fa-solid fa-file-lines",
                  function: (data) => setModalDetails({ is: true, content: data }),
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