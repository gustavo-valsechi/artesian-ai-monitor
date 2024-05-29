import { authOptions } from "next-auth/config"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Client from "./client"

export const dynamic = 'force-dynamic'

export default async function LoginServer(context) {
    const { user }: any = await getServerSession(authOptions) || {}

    if (user?.token) redirect("/monitor")

    return <Client user={user} />
}