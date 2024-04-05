"use client"

import React from "react"
import { Container } from "./styles"

interface ILogo {
  opacity?: string | number
  size?: string | number
}

export function Logo(props: ILogo) {
  return (
    <Container {...props}>
      <div className="logo-container">
        <i aria-hidden className="fa-solid fa-square-poll-vertical" />
      </div>
      <label>Artesian AI</label>
    </Container>
  )
}