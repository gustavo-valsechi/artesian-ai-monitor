import { getMotors, DCredentials, getFlowMonitor, getFaultDetections, getVariablesMonitor } from "@/api"

import Client from "./client"

export default async function MonitorServer() {

    const motors = await getMotors(DCredentials)
    const flow = await getFlowMonitor()
    const faultDetection = await getFaultDetections()
    const variables = await getVariablesMonitor()

    return <Client data={{ motors, flow, faultDetection, variables }} />
}