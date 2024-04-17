"use client"

import React from "react"
import { Container } from "./styles"
import { useAuth } from "@/contexts/auth"
import { Modal } from "@/components"
import _ from "lodash"

interface IProps {
    toggle: {
        value: boolean
        set: Function
    }
}

export default function Profile(props: IProps) {

    const { logout, user } = useAuth()

    const menu = [
        { icon: "fa-solid fa-user", label: "Alterar perfil", function: () => { } },
        { icon: "fa-solid fa-arrow-right-from-bracket", label: "Sair", function: logout },
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
                        <i className="fa-solid fa-user-circle" />
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-content">
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="profile-menu">
                        {_.map(menu, (data, index) =>
                            <div key={index} className="profile-menu-item" onClick={data.function}>
                                <div><i className={data.icon} /></div>
                                <label>{data.label}</label>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </Modal>
    )
}