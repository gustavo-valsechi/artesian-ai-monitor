import { getDashboards } from "@/api/dashboard"

import Client from "./client"

export default async function DashboardServer() {

    const dashboards = await getDashboards({
        offset: 0,
        order: { name: "ASC" }
    }) || {}

    return <Client data={dashboards} />
}