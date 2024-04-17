import { api } from "../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getMonitors(credentials: any) {
    try {
        // const { data } = await api.get("monitor")

        // console.log(data)

        return {
            content: [
                { id: 1, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
                { id: 2, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
                { id: 3, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
            ],
            total: 3,
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