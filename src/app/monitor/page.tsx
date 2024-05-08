import { getAlerts, getMotors, getMonitor, DCredentials } from "@/api"

import Client from "./client"

export default async function MonitorServer() {

    const alerts = await getAlerts(DCredentials)
    const motors = await getMotors(DCredentials)
    const monitor = await getMonitor()

    return <Client data={{ alerts, motors, monitor }} />
}