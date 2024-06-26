import { api } from ".."
import _ from "lodash"

export async function getAnomalies(credentials?: any) {
    try {
        const { data } = await api.get("anomaly-detection", { params: credentials })

        return {
            ...data,
            content: credentials
                ? data?.content || []
                : _.reverse(data?.content || [])
        }
    } catch (error: any) {
        console.error(error)
    }
}