"use client"

import React from "react"
import { Container } from "./styles"
import { usePathname } from "next/navigation"
import { Logo } from "@/components"
import { useAuth } from "@/contexts/auth"
import Link from "next/link"
import _ from "lodash"

interface IProps {
    show: boolean
    profile: {
        value: boolean
        set: Function
    }
}

interface INavigation {
    icon: string
    label: string
    route: string
    amount?: number
}

export default function Menu(props: IProps) {

    const pathname = usePathname()
    const { user } = useAuth()

    const navigation: Array<INavigation> = [
        { icon: "fa-solid fa-bullseye", label: "Monitoramento", route: "/monitor" },
        { icon: "fa-solid fa-chart-simple", label: "Leitura de variáveis", route: "/variables" },
        { icon: "fa-solid fa-bell", label: "Alertas", route: "/alerts", amount: 2 },
    ]

    return (
        <Container show={props.show}>
            <div>
                <header>
                    <Logo />
                </header>
                <nav>
                    <ul>
                        {_.map(navigation, (data, index) =>
                            <li key={index}>
                                <Link href={data.route}>
                                    <div className={`nav-item ${_.includes(pathname, data.route) ? "target" : ""}`}>
                                        <div className="nav-item-content">
                                            <i aria-hidden className={data.icon} />
                                        </div>
                                        <div className="nav-item-content">
                                            <span>{data.label}</span>
                                            {!!data.amount &&
                                                <div className="nav-item-amount">
                                                    {data.amount}
                                                </div>}
                                        </div>
                                        {_.includes(pathname, data.route) &&
                                            <div className="nav-item-content">
                                                <i aria-hidden className="fa-solid fa-angle-right" />
                                            </div>}
                                    </div>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <footer>
                <div className="profile">
                    <div className="profile-content">
                        <i aria-hidden className="fa-solid fa-circle-user" />
                        <div>
                            <label>{user.name}</label>
                            <label>{user.email}</label>
                        </div>
                    </div>
                    <button onClick={() => props.profile.set(true)} title="Perfil">
                        <i aria-hidden className="fa-solid fa-bars" />
                    </button>
                </div>
            </footer>
        </Container>
    )
}