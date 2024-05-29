import React from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "next-auth/config"
import { redirect } from "next/navigation"

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    const { user }: any = await getServerSession(authOptions) || {}

    if (!user?.token) redirect("/auth/login")

    return <>{children}</>
}