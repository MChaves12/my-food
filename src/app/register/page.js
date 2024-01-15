'use client'

import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        fetch('/api/register', {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        });
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-8"> 
                Register 
            </h1>
            <form className="block max-w-sm mx-auto" onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email}
                        onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                />
                <button type="submit"> Register </button>
                <div className="my-4 text-center text-gray-400">
                    <p> or login with socials </p>
                </div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/images/google.png'} alt="google icon" width={22} height={22} /> 
                    Login with Google
                </button>
            </form>

        </section>
    )
}