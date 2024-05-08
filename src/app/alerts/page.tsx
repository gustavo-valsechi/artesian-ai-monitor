import { DCredentials, getAlerts } from "@/api"

import Client from "./client"

export default async function AlertServer() {

    const monitors = await getAlerts(DCredentials)

    return <Client data={monitors} />
}