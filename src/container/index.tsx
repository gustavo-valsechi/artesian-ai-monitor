"use client"

import React, { useEffect, useState } from "react"
import { Container } from "./styles"
import { usePathname } from "next/navigation"
import { LoadingPage } from "@/components"
import _ from "lodash"

import motor from "@/assets/motor.png"

import Profile from "./profile"
import Menu from "./menu"
import Header from "./header"

export interface INavigation {
    icon?: string
    img?: any
    label: string
    route: string
    amount?: number
}

export default function MainContainer({ children, user }: {
    children: React.ReactNode
    user: any
}) {

    const pathname = usePathname()

    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState(false)

    const privateRoutes: boolean = !_.includes(pathname, "auth")

    const navigation: Array<INavigation> = [
        {
            icon: "fa-solid fa-chart-simple",
            label: "Monitoramento",
            route: "/monitor"
        },
        {
            img: motor,
            label: "Motores",
            route: "/motors"
        },
        {
            icon: "fa-solid fa-circle-exclamation",
            label: "Alertas",
            route: "/alerts",
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [])

    return (
        <Container>
            {!!loading && <LoadingPage />}
            <Profile
                user={user}
                toggle={{ value: profile, set: setProfile }}
            />
            <Menu
                user={user}
                show={privateRoutes}
                navigation={navigation}
                profile={{ value: profile, set: setProfile }}
            />
            <div className="main-container">
                <Header
                    user={user}
                    navigation={navigation}
                />
                {children}
            </div>
        </Container>
    )
}