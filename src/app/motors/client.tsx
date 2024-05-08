"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Table } from "@/components"
import Utils from "@/utils"
import _ from "lodash"

import { DCredentials, getMotors, removeMotor } from "@/api"

export default function MotorClient({ data }: any) {

  const [modal, setModal] = useState({ is: false, content: {} })
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
                icon: "fa-solid fa-bullseye"
              }
            }
          },
          {
            column: "Nome",
            row: { name: "name", style: { fontWeight: 600 } }
          },
          {
            column: "Modelo",
            row: "model"
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
                function: () => { },
                position: "right"
              }
            },
            row: {
              actions: [
                {
                  icon: "fa-solid fa-pen-to-square",
                  function: (data) => details(data),
                  tooltip: "Editar"
                },
                {
                  icon: "fa-solid fa-trash-can",
                  function: (data) => details(data),
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