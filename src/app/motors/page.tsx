// import { getMotors } from "@/api/motor"

import Client from "./client"

export default async function MotorServer() {

    const motors = []
    // await getMotors({
    //     offset: 0,
    //     order: { name: "ASC" }
    // }) || {}

    return <Client data={motors} />
}