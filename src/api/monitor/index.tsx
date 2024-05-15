import { api } from "../"
import { toast } from "react-hot-toast"
import moment from "moment"
import _ from "lodash"

export async function getFlowMonitor(credentials?: any) {
    try {
        const { data } = await api.get("previsao")

        return {
            content: _.reverse(data?.content || [])
        }
    } catch (error: any) {
        console.error(error)
    }
}

export async function getMonitor(credentials?: any) {
    try {
        // const { data } = await api.get("previsao")

        // console.log(data)

        return {
            content: [{
                "timestamp": moment().format("DD/MM HH:mm:ss"),
                "flow": _.random(21, 24),
                "1": {
                    frequency: _.random(58, 62),
                    voltage: _.random(218, 232),
                    current: _.random(14, 17)
                },
                "2": {
                    frequency: _.random(58, 62),
                    voltage: _.random(218, 232),
                    current: _.random(14, 17)
                },
                "3": {
                    frequency: _.random(58, 62),
                    voltage: _.random(218, 232),
                    current: _.random(14, 17)
                }
            }],
            total: 10,
            totalPages: 1,
        }
    } catch (error: any) {
        console.error(error)
    }
}

export async function saveMonitor(body: any) {
    try {

        // const req: any = {
        //     "true": { method: "put", url: `monitor/${body.id}` },
        //     "false": { method: "post", url: "monitor" },
        // }

        // const method = req[String(!!body.id)].method
        // const url = req[String(!!body.id)].url

        // const { data } = await (api as any)[method](url, _.omit(body, ["id"]))

        toast.success(`Gráfico ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        // return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}

export async function removeMonitor(uuid: string) {
    try {
        // const { data } = await api.delete(`monitor/${uuid}`)

        toast.success("Gráfico removido com sucesso!")

        // return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}