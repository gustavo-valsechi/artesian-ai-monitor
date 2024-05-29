import axios, { AxiosError, InternalAxiosRequestConfig } from "axios"
import { getServerSession } from "next-auth"
import { authOptions } from "next-auth/config"
import { getSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import _ from "lodash"

export const api = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://api-artesian-ai-monitor.onrender.com",
})

async function getAuthToken() {
    let session: any = { user: {} }

    if (typeof window === 'undefined') session = await getServerSession(authOptions)
    else session = await getSession()

    return session?.user?.token
}

api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = await getAuthToken()

        if (token) config.headers.authorization = `Bearer ${token}`

        return config
    }
)

api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {

        const response: any = error.response?.data || {}

        if (
            response.msg === "Token has expired"
            && typeof window !== 'undefined'
        ) {
            await signOut({ redirect: false })
            redirect("/auth/login")
        }

        return Promise.reject(error)
    }
)

export * from "./alerts"
export * from "./monitor"
export * from "./motors"

export const DCredentials = {
    limit: 10,
    offset: 0,
    order: { name: "ASC" }
}

export const DPagination = {
    content: [],
    total: 0,
    totalPage: 0,
    hasNext: false
}
