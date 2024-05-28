"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import _ from "lodash"

const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }: {
    children: React.ReactNode,
}) => {
    const router = useRouter()
    const pathname = usePathname()

    const [token, setToken] = useState("")
    const [user, setUser] = useState<any>({})

    useEffect(() => {
        const tokenStorage = sessionStorage.getItem("@token")
        const userStorage = sessionStorage.getItem("@user")

        if (!token && !tokenStorage) {
            router.push("/auth/login")
            return
        }

        if (!token && tokenStorage) setToken(tokenStorage)
        if (!user.id && userStorage) setUser(JSON.parse(userStorage))

        if (_.includes(pathname, "auth")) router.push("/monitor")
        // eslint-disable-next-line
    }, [token])

    const logout = () => {
        sessionStorage.removeItem("@token")
        setToken("")
        router.push("/auth/login")
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!token,
                token,
                setToken,
                logout,
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)