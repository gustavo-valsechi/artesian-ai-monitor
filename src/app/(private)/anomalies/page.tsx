import { DCredentials, getAnomalies } from "@/app/api"

import Client from "./client"

export const dynamic = 'force-dynamic'

export default async function AnomalyServer() {

    const monitors = await getAnomalies({
        ...DCredentials,
        filters: { previsao_registrada: 1 }
    })

    return <Client data={monitors} />
}