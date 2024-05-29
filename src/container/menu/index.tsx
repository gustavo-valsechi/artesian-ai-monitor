"use client"

import React from "react"
import { Container } from "./styles"
import { usePathname } from "next/navigation"
import { Logo } from "@/components"
import Link from "next/link"
import Image from "next/image"
import _ from "lodash"

interface IProps {
    show: boolean
    user: any
    navigation: any[]
    profile: {
        value: boolean
        set: Function
    }
}

export default function Menu(props: IProps) {

    const pathname = usePathname()

    return (
        <Container show={props.show}>
            <div>
                <header>
                    <Logo />
                </header>
                <nav>
                    <ul>
                        {_.map(props.navigation || [], (data, index) =>
                            <li key={index}>
                                <Link href={data.route}>
                                    <div className={`nav-item ${_.includes(pathname, data.route) ? "target" : ""}`}>
                                        <div className="nav-item-content">
                                            {!!data.icon &&
                                                <i aria-hidden className={data.icon} />}
                                            {!!data.img &&
                                                <div className="nav-item-content-img">
                                                    <Image priority alt="" src={data.img} />
                                                </div>}
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
                            <label>{props.user?.name}</label>
                            <label>{props.user?.email}</label>
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