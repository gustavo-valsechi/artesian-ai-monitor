import axios, { AxiosError, InternalAxiosRequestConfig } from "axios"
import { getServerSession } from "next-auth"
import { authOptions } from "next-auth/config"
import { getSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import _ from "lodash"

export const api = axios.create({
    baseURL: process.env.NEXTAPI_URL || "https://api-artesian-ai-monitor.onrender.com",
})

async function getAuthToken() {
    let session: any = { user: {} }

    if (typeof window === 'undefined') session = await getServerSession(authOptions)
    else session = await getSession()

    return session?.user?.token
}

async function redirectToLogin(ctx: any = null) {
    if (typeof window !== 'undefined') {
        if (window.location.pathname === "/auth/login") return
        window.location.href = '/auth/login'
        return
    }

    if (ctx?.res) {
        ctx.res.writeHead(302, { Location: '/auth/login' })
        ctx.res.end()
        return
    } else {
        redirect("/auth/login")
        return
    }
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
    async (error: any) => {

        const response: any = error.response?.data || {}

        const authErrors = [
            "Missing Authorization Header",
            "Token has expired",
        ]

        if (
            _.includes(authErrors, response.msg)
            && typeof window !== 'undefined'
        ) {
            await signOut({ redirect: false })
            redirectToLogin(error?.config?.ctx)
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
