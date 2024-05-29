import { api } from ".."
import _ from "lodash"

export async function getFlowMonitor(credentials?: any) {
    try {
        const { data } = await api.get("flow")

        return {
            content: _.reverse(data?.content || [])
        }
    } catch (error: any) {
        // console.error(error)
    }
}

export async function getVariablesMonitor(credentials?: any) {
    try {
        const { data } = await api.get("log-motor")

        return {
            content: _.reverse(data?.content || [])
        }
    } catch (error: any) {
        // console.error(error)
    }
}