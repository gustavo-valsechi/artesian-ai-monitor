import { api } from ".."
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getMotors(credentials: any) {
    try {
        const { data } = await api.get("motor", { params: credentials })

        return data
    } catch (error: any) {
        console.error(error)
    }
}

export async function saveMotor(body: any) {
    try {
        const { data } = await api.post("motor", body)

        toast.success(`Dados do motor ${body.id_motor ? "atualizados" : "cadastrados"} com sucesso!`)

        return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}

export async function removeMotor(idMotor: string) {
    try {
        const { data } = await api.delete(`motor/${idMotor}`)

        toast.success("Motor removido com sucesso!")

        return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}