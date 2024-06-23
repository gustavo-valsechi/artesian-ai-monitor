import { getMotors, DCredentials, getFlowMonitor, getAnomalies, getVariablesMonitor } from "@/app/api"

import Client from "./client"

export const dynamic = 'force-dynamic'

export default async function MonitorServer(context) {

    const motors = await getMotors(DCredentials)
    const flow = await getFlowMonitor()
    const faultDetection = await getAnomalies()
    const variables = await getVariablesMonitor()

    return <Client data={{ motors, flow, faultDetection, variables }} />
}