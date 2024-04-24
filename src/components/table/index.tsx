"use client"

import React from "react"
import { Container } from "./styles"
import { LoadingBar } from "../loading/bar"
import { Paginate } from "./paginate"
import Image from "next/image"
import _ from "lodash"

interface IAction {
  disabled?: boolean
  position?: string
  function: (data?: any) => any
  icon?: string
  label?: string
  tooltip?: string
}

interface IColumn {
  name?: string
  style?: object
  action?: IAction
}

interface IRow {
  actions?: Array<IAction>
  image?: any
  style?: object
  mask?: any
  custom?: (data: any) => React.ReactNode
  name?: string
}

interface ITable {
  content: Array<any>
  loading?: boolean | {
    is?: boolean
    items?: Array<any>
  }
  options: Array<{
    column: IColumn | string
    row: IRow | string
  }>
  notFound?: {
    title: string
    message: string
  }
  paginate?: {
    total: number
    page: {
      value: number
      set: (value: number) => any
    }
  }
}

export function Table(props: ITable) {

  const rowContent = (data: any, option: any) => {

    const row = option.row as IRow || {}
    const content = data[row.name as string] || data

    let body: any

    while (!body) {

      if (_.isString(row)) body = data[row]
      if (_.isString(content)) body = content
      if (_.isFunction(row.mask)) body = row.mask(content)
      if (_.isFunction(row.custom)) body = row.custom(content)

      body = body ?? "---"
    }

    return (
      <div
        className="row-content"
        title={_.isString(body) ? body : ""}
      >
        {body}
      </div>
    )
  }

  return (
    <Container notFound={!props.content?.length && !props.loading}>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              {_.map(props.options, (option, index: number) =>
                <th key={index} style={(option.column as IColumn)?.style}>
                  <div
                    className={`table-temp ${(option.column as IColumn)?.action
                      ? `action ${(option.column as IColumn)?.action?.position
                        ? (option.column as IColumn)?.action?.position
                        : ""}`
                      : ""}`
                    }
                  >
                    {!!(option.column as IColumn)?.action
                      ? <button
                        className="button"
                        onClick={(option.column as IColumn)?.action?.function}
                        disabled={(option.column as IColumn)?.action?.disabled}
                        data-label={String(!!(option.column as IColumn)?.action?.label)}
                      >
                        <i aria-hidden className={(option.column as IColumn)?.action?.icon || "fa-solid fa-eye"} />
                        {!!(option.column as IColumn)?.action?.label && (
                          <p>
                            {(option.column as IColumn)?.action?.label}
                          </p>
                        )}
                      </button>
                      : _.isString((option.column as IColumn)?.name || option.column) ? (option.column as any)?.name || option.column : ""}
                  </div>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {(props.loading as { is: boolean })?.is || props.loading
              ? _.map((props.loading as { items: Array<any> })?.items || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (data, key: number) =>
                <tr key={key}>
                  {_.map(props.options, (data, index: number) => (
                    <td key={index}>
                      <LoadingBar
                        height="2.4rem"
                        borderRadius={
                          index === 0
                            ? "5px 0 0 5px"
                            : props.options?.length - 1 === index
                              ? "0 5px 5px 0"
                              : "0"
                        }
                        margin={key === 0 ? "1.5rem 0 0" : ".5rem 0 0"}
                      />
                    </td>
                  ))}
                </tr>)
              : _.map(props.content, (data, key) =>
                <tr key={key}>
                  {_.map(props.options, (option, index) => (
                    <td key={index}>
                      <div
                        className={`
                          table-temp 
                          ${(option.row as IRow)?.actions ? "action" : ""} 
                          ${(option.row as IRow)?.image ? "image" : ""}
                        `}
                        style={(option.row as IRow)?.style}
                      >
                        {!!(option.row as IRow)?.actions
                          ? <div className="actions">
                            {_.map((option.row as IRow)?.actions, (action, index) =>
                              <button
                                key={index}
                                className={`
                                  button
                                  ${_.includes(action.icon, "trash") ? "negative" : ""} 
                                `}
                                onClick={() => action.function ? action.function(data) : null}
                                disabled={action.disabled}
                                data-tooltip={action.tooltip}
                              >
                                <i aria-hidden className={action.icon || "fa-solid fa-eye"} />
                                {!!action.label && (
                                  <p>
                                    {action.label}
                                  </p>
                                )}
                              </button>)}
                          </div>
                          : (option.row as IRow)?.image
                            ? <div className="avatar">
                              {!!(option.row as IRow)?.image?.value
                                ? (option.row as IRow)?.image?.value(data)
                                : !!_.isFunction((option.row as { image: (data: any) => React.ReactNode })?.image)
                                  ? (option.row as { image: (data: any) => React.ReactNode })?.image(data)
                                  : false
                                    ? <Image
                                      src={!!(option.row as IRow)?.image?.value
                                        ? (option.row as IRow)?.image?.value(data)
                                        : (option.row as IRow)?.image(data)}
                                      alt=""
                                    />
                                    : <i
                                      aria-hidden
                                      className={
                                        _.isFunction((option.row as { image: { icon: any } })?.image?.icon)
                                          ? (option.row as { image: { icon: any } }).image.icon(data) || "fa-solid fa-circle-user"
                                          : (option.row as { image: { icon: string } })?.image?.icon || "fa-solid fa-circle-user"
                                      }
                                    />}
                            </div>
                            : rowContent(data, option)}
                      </div>
                    </td>
                  ))}
                </tr>)}
          </tbody>
        </table>
      </div>
      {!props.content?.length && !props.loading && (
        <div className="not-found">
          <p>{props.notFound?.title || "Nenhuma campanha encontrado"}</p>
          <p>{props.notFound?.message || "Envie uma campanha de marketing para aparecer algum registro"}</p>
        </div>
      )}
      {!!props.paginate && <Paginate {...props.paginate} />}
    </Container>
  )
}