import { api } from "../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function login(credentials: { username: string, password: string }) {
    try {
        // const { data } = await api.post("auth", credentials)
        // console.log(data);

        // if (!data?.access_token) throw new Error("Usuário ou senha inválida, verifique e tente novamente")

        // const token = data.access_token

        const token = "ifnienfienfiuernierni"

        sessionStorage.setItem("@token", token)
        sessionStorage.setItem("@user", JSON.stringify({
            id: 1,
            name: "Gustavo Valsechi de Freitas",
            email: "gustavo@gamil.com",
            phone: "48999100598"
        }))

        return token
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}

export async function getUser() {
    try {
        return {
            id: 1,
            name: "gustavo valsechi de freitas",
            email: "gustavo@nummus.com.br",
            phone: "48999100598",
        }
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}