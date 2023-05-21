'use client'

import { useState } from "react"

export default function About() {
    const [email, setEmail] = useState("")
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p>about page</p>
        </div>
      </main>
    )
  }
  