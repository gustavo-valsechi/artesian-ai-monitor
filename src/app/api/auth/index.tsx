import CredentialsProvider from 'next-auth/providers/credentials'
import { api } from "../"

const secret = process.env.NEXTAUTH_SECRET || "http://localhost:5000/auth"

export const authOptions: any = {
    debug: process.env.NODE_ENV !== "production",
    secret,
    session: { strategy: "jwt" },
    jwt: { secret },
    pages: {
        signIn: "/auth/login",
        error: "/auth/login",
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials: any) {
                const { data } = await api.post("auth", credentials)

                if (!data?.token) return null

                return data
            }
        })
    ],
    callbacks: {
        async session({ session, token }: any) {

            if (session?.user) session.user = token.user

            return session
        },
        async jwt({ token, user }: any) {

            if (user) token.user = user

            return token
        },
    },
}