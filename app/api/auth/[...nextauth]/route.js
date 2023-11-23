import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { api } from "@/services/api";


const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                // const user = await api.post('/login', {
                //     email: credentials?.email,
                //     password: credentials?.password
                // }).then(data => { return data.data })

                // if (user == null) {
                //     return null
                // }
                // return user

                if (credentials?.email == 'admin@email.com' && credentials?.password == 'admin'){
                    return true
                }

                return false
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user)
            return token
        },
        async session({ session, token }) {
            session = token.user
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }