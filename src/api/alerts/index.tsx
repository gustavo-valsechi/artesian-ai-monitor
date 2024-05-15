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
                    "message": "Motor 1 com variação na frequência",
                    "read": true,
                    "timestamp": moment().subtract(1, 'day').format("DD/MM/YYYY HH:mm:ss"),
                },
                {
                    "id": "2",
                    "message": "Motor 3 com variação na corrente",
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