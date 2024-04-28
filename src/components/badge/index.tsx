"use client"

import React from "react"
import { Container } from "./styles"
import { useTheme } from "@/contexts/theme"
import _ from "lodash"

interface IBadge {
  value: string
}

export function Badge(props: IBadge) {

  const { theme } = useTheme()

  const status: any = {
    ATIVO: "positive",
    DESATIVADO: "negative",

    ESTAVEL: "positive",
    INSTAVEL: "negative",
    REGULAR: "negative",
  }

  return (
    <Container color={status[props.value] || theme.transparent_3}>
      <div className="content">
        <div>{_.lowerCase(props.value)}</div>
      </div>
    </Container>
  )
}