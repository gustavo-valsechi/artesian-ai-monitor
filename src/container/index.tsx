"use client"

import React, { useEffect, useState } from "react"
import { Container } from "./styles"
import { usePathname } from "next/navigation"
import { LoadingPage } from "@/components"
import _ from "lodash"

import Profile from "./profile"
import Menu from "./menu"
import Header from "./header"

export default function MainContainer({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()

    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState(false)

    const privateRoutes: boolean = !_.includes(pathname, "auth")

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [])

    return (
        <Container>
            {!!loading && <LoadingPage />}
            <Profile toggle={{ value: profile, set: setProfile }} />
            <Menu show={privateRoutes} profile={{ value: profile, set: setProfile }} />
            <div className="main-container">
                <Header />
                {children}
            </div>
        </Container>
    )
}