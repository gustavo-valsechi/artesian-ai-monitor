import { getMonitors } from "@/api/monitor"

import Client from "./client"

export default async function MonitorServer() {

    const monitors = await getMonitors({
        offset: 0,
        order: { name: "ASC" }
    }) || {}

    return <Client data={monitors} />
}