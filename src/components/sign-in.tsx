"use client"

import { loginWithGoogle } from "@/lib/actions/auth"

export const SignIn = () => {
    return <button onClick={loginWithGoogle}>Sign in with google</button>
}