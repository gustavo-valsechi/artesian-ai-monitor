"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth"
import * as z from "zod"

import { login } from "@/api/auth"

export default function Login(props: any) {
    const router = useRouter()
    const { setToken } = useAuth()

    const [loading, setLoading] = useState(false)

    async function onSubmit(credentials: any) {
        setLoading(true)

        const token = await login(credentials)

        if (token) {
            setToken(token)
            console.log(token)
            router.push("/monitor")
        }

        setLoading(false)
    }

    return (
        <Container>
            <div className="container">
                <Logo size="1.3" />
                <div className="content">
                    <div className="content-title">Fazer login</div>
                    <Form
                        onSubmit={onSubmit}
                        inputs={[
                            {
                                label: "Usuário",
                                name: "username",
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLength: 255
                            },
                            {
                                label: "Senha",
                                name: "password",
                                type: "password",
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLength: 255
                            },
                        ]}
                        buttons={[{
                            type: "submit",
                            label: "entrar",
                            loading: loading,
                        }]}
                    />
                </div>
            </div>
        </Container>
    )
}