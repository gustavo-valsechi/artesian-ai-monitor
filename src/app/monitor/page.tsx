import { getMotors, getMonitor, DCredentials, getFlowMonitor } from "@/api"

import Client from "./client"

export default async function MonitorServer() {

    const motors = await getMotors(DCredentials)
    const flow = await getFlowMonitor()
    const monitor = await getMonitor()

    return <Client data={{ motors, flow, monitor }} />
}