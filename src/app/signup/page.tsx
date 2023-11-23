"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { axios } from "axios"

export default function SignupPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
                type="text"
                id="username" 
                value={user.username}
                onChange={(e) => setUser({...user, username:e.target.value})}
                placeholder="username"
            />
            <hr />
            <label htmlFor="email">email</label>
            <input 
                type="text"
                id="email" 
                value={user.email}
                onChange={(e) => setUser({...user, email:e.target.value})}
                placeholder="email"
            />
            <hr />
            <label htmlFor="password">password</label>
            <input 
                type="password"
                id="password" 
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                placeholder="password"
            />
            <button 
                onClick={onSignup}
                className="border-gray-300 border p-2 rounded-lg m-2"
            >
                Signup here
            </button>
            <Link href="/login">visit Login</Link>
        </div>
    )
}
