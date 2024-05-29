import { DCredentials, getFaultDetections } from "@/app/api"

import Client from "./client"

export const dynamic = 'force-dynamic'

export default async function AlertServer() {

    const monitors = await getFaultDetections({
        ...DCredentials,
        filters: { previsao_registrada: 1 }
    })

    return <Client data={monitors} />
}