"use client"

import React from "react"
import { Container } from "./styles"
import { useTheme } from "@/contexts/theme"
import { usePathname } from "next/navigation"
import _ from "lodash"

export default function Header(props: any) {

  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navigation = _.find(props.navigation, (data) => data.route === pathname) || {}

  return (
    <Container themeType={theme} {...props}>
      {!!navigation.label &&
        <div className="header-label">
          <span>{navigation.label}</span>
        </div>}
      <div
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <i aria-hidden className="fa-solid fa-moon" />
        <div className="toggle">
          <div />
        </div>
        <i aria-hidden className="fa-solid fa-sun" />
      </div>
    </Container>
  )
}