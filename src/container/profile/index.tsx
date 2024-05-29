"use client"

import React from "react"
import { Container } from "./styles"
import { Modal } from "@/components"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import _ from "lodash"

interface IProps {
    user: any
    toggle: {
        value: boolean
        set: Function
    }
}

export default function Profile(props: IProps) {

    const router = useRouter()

    const menu = [
        {
            icon: "fa-solid fa-user",
            label: "Alterar perfil",
            function: () => { }
        },
        {
            icon: "fa-solid fa-arrow-right-from-bracket",
            label: "Sair",
            function: async () => {
                await signOut({ redirect: false })
                router.push("/auth/login")
                props.toggle.set(false)
            }
        },
    ]

    return (
        <Modal
            right
            toggle={props.toggle.value}
            onClose={() => props.toggle.set(false)}
        >
            <Container>
                <div className="profile-header">
                    <div className="profile-header-avatar">
                        <i aria-hidden className="fa-solid fa-user-circle" />
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-content">
                        <span>{props.user?.name}</span>
                        <span>{props.user?.email}</span>
                    </div>
                    <div className="profile-menu">
                        {_.map(menu, (data, index) =>
                            <div key={index} className="profile-menu-item" onClick={data.function}>
                                <div><i aria-hidden className={data.icon} /></div>
                                <label>{data.label}</label>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </Modal>
    )
}