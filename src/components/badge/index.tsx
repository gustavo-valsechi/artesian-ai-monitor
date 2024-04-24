"use client"

import React from "react"
import { Container } from "./styles"
import _ from "lodash"

interface IBadge {
  value: string
}

export function Badge(props: IBadge) {

  const status: any = {
    ESTAVEL: "positive",
    INSTAVEL: "negative",
    REGULAR: "negative",
  }

  return (
    <Container color={status[props.value]}>
      <div className="content">
        <div>{_.lowerCase(props.value)}</div>
      </div>
    </Container>
  )
}