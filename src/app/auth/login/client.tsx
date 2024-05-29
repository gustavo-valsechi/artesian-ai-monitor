"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import * as z from "zod"

import { signIn } from "next-auth/react"

export default function LoginClient(props: any) {

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    async function onSubmit(credentials: any) {
        setLoading(true)

        const login: any = await signIn("credentials", { ...credentials, redirect: false }) || {}

        if (login.error) {
            toast.error("Usuário ou senha inválida, verifique e tente novamente!")
        } else {
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