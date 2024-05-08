import { api } from "../"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getMotors(credentials: any) {
    try {
        // const { data } = await api.get("monitor")

        // console.log(data)

        return {
            content: [
                {
                    "id": "1",
                    "name": "Motor 1",
                    "model": "MotorX-5000",
                    "power": 3300,
                    "voltage": 220,
                    "current": 15,
                    "frequency": 60,
                    "status": "DESATIVADO"
                },
                {
                    "id": "2",
                    "name": "Motor 2",
                    "model": "MotorY-7000",
                    "power": 3300,
                    "voltage": 220,
                    "current": 15,
                    "frequency": 60,
                    "status": "ATIVO"
                },
                {
                    "id": "3",
                    "name": "Motor 3",
                    "model": "MotorZ-10000",
                    "power": 3300,
                    "voltage": 220,
                    "current": 15,
                    "frequency": 60,
                    "status": "DESATIVADO"
                }
            ],
            total: 3,
            totalPages: 1,
        }
    } catch (error: any) {
        console.error(error)
    }
}

export async function saveMotor(body: any) {
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

export async function removeMotor(uuid: string) {
    try {
        // const { data } = await api.delete(`monitor/${uuid}`)

        toast.success("Gráfico removido com sucesso!")

        // return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}