'use client'

import { useState } from "react"

export default function SignupForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const onSubmitHandler = async () => {
        try {
<<<<<<< HEAD
           let res = await fetch('/api/new', {
=======
           let res = await fetch('http://localhost:3000/signup/api/', {
>>>>>>> d1e1a492248887393a26808265828b41c13f3e2c
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Set the appropriate content type for your request
                },
                body: JSON.stringify({
                    name,
                    email
                }), // Convert the data to JSON format
              })
              console.log("res", res);
        } catch (error) {
            console.log("error");
        }
    }
    return (
        <div>
            <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />\
            <button onClick={onSubmitHandler}>Submit</button>
        </div>

    )
}
