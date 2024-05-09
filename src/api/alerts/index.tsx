import { api } from "../"
import { toast } from "react-hot-toast"
import _ from "lodash"
import moment from "moment"

export async function getAlerts(credentials: any) {
    try {
        // const { data } = await api.get("monitor")

        // console.log(data)

        return {
            content: [
                {
                    "id": "1",
                    "title": "Motor 1 com variação na vibração",
                    "message": "Ocorreu uma variação brusca no Motor 1 na leitura da vibração, verifique se os componentes dele estão funcionando adequadamente",
                    "read": true,
                    "timestamp": moment().subtract(1, 'day').format("DD/MM/YYYY HH:mm:ss"),
                },
                {
                    "id": "2",
                    "title": "Motor 3 com variação na corrente",
                    "message": "Ocorreu uma variação brusca no Motor 1 na leitura da corrente, verifique se o eixo do motor esta lubrificado adequadamente ou se o cabeamento esta isolado de forma correta",
                    "read": false,
                    "timestamp": moment().format("DD/MM/YYYY HH:mm:ss"),
                }
            ],
            total: 3,
            totalPages: 1,
        }
    } catch (error: any) {
        console.error(error)
    }
}