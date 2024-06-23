"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Table } from "@/components"
import Utils from "@/utils"
import _ from "lodash"

import { DCredentials, getMotors } from "@/app/api"

import ModalSave from "./modals/save"
import ModalRemove from "./modals/remove"

export default function MotorClient({ data }: any) {

  const [modalSave, setModalSave] = useState({ is: false, content: {} })
  const [modalRemove, setModalRemove] = useState({ is: false, content: {} })

  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(data)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getMotors({ ...DCredentials, offset: page })

    setContent(data)
    setLoading(false)
  }

  return (
    <Container>
      <ModalSave
        fetch={fetch}
        modal={{
          value: modalSave,
          set: setModalSave
        }}
      />
      <ModalRemove
        fetch={fetch}
        modal={{
          value: modalRemove,
          set: setModalRemove
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
          title: "Nenhum motor encontrado",
          message: "Adicione um motor para começar o monitoramento"
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
                icon: "fa-solid fa-gear"
              }
            }
          },
          {
            column: "Referência",
            row: { name: "referencia", style: { fontWeight: 600 } }
          },
          {
            column: "Nome",
            row: { name: "tag", style: { fontWeight: 500 } }
          },
          {
            column: "Descrição",
            row: "descricao"
          },
          {
            column: "Parâmetros",
            row: {
              custom: (data) =>
                <div className="content-params">
                  {_.map(Utils.format.params(data), (value: string, key: string) =>
                    <div key={key}>
                      <span>
                        {value}
                      </span>
                    </div>
                  )}
                </div>
            }
          },
          {
            column: {
              style: { width: "2.3rem" },
              action: {
                icon: "fa-solid fa-plus",
                disabled: loading,
                function: () => setModalSave({ is: true, content: {} }),
                position: "right"
              }
            },
            row: {
              actions: [
                {
                  icon: "fa-solid fa-pen-to-square",
                  function: (data) => setModalSave({ is: true, content: data }),
                  tooltip: "Editar"
                },
                {
                  icon: "fa-solid fa-trash-can",
                  function: (data) => setModalRemove({ is: true, content: data }),
                  tooltip: "Remover"
                }
              ]
            }
          },
        ]}
      />
    </Container>
  )
}