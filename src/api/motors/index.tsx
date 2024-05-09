import { api } from "../"
import { toast } from "react-hot-toast"
import _ from "lodash"

import motors from "../../repository/motors.json"

export async function getMotors(credentials: any) {
    try {
        // const { data } = await api.get("monitor")

        // console.log(data)

        return {
            content: motors,
            total: motors.length,
            totalPages: Math.ceil(motors.length / credentials.limit),
        }
    } catch (error: any) {
        console.error(error)
    }
}

export async function saveMotor(body: any) {
    try {

        const req: any = {
            "true": { method: "put", url: `motor/${body.id}` },
            "false": { method: "post", url: "motor" },
        }

        const method = req[String(!!body.id)].method
        // const url = req[String(!!body.id)].url

        // const { data } = await (api as any)[method](url, _.omit(body, ["id"]))
        
        const index = _.findIndex(motors, (data) => data.id === body.id)

        if (method === "post") motors.unshift(body)
        if (method === "put") motors.splice(index, 1, body)

        toast.success(`Dados do motor ${body.id ? "atualizados" : "cadastrados"} com sucesso!`)

        // return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}

export async function removeMotor(id: string) {
    try {
        // const { data } = await api.delete(`monitor/${uuid}`)

        const index = _.findIndex(motors, (data) => data.id === id)

        motors.splice(index, 1)

        toast.success("Motor removido com sucesso!")

        // return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}