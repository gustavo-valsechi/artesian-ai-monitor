import { DCredentials, getFaultDetections } from "@/api"

import Client from "./client"

export default async function AlertServer() {

    const monitors = await getFaultDetections({
        ...DCredentials,
        filters: { previsao_registrada: 1 }
    })

    return <Client data={monitors} />
}