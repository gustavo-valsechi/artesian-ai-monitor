// import { DCredentials, getMotors } from "@/api"

import Client from "./client"

export const dynamic = 'force-dynamic'

async function getData() {
    const response = await fetch("http://localhost:5000/motor")

    if (!response.ok) throw new Error("Errorrr")

    return response.json()
}

export default async function MotorServer() {

    const motors = await getData()

    return <Client data={motors} />
}