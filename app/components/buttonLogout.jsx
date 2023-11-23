'use client'

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ButtonLogout() {
    const router = useRouter()


    async function logout() {
        await signOut({
            redirect: false
        })

        router.replace('/login')
    }


    return (
        <button className='bg-red-500 p-3 hover:bg-red-600 rounded-md' onClick={logout}>Sign Out</button>
    )
}