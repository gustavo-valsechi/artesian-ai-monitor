import { DCredentials, getMotors } from "@/api"

import Client from "./client"

export default async function MotorServer() {

    const motors = await getMotors(DCredentials)

    return <Client data={motors} />
}