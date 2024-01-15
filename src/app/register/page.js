import Image from "next/image";

export default function RegisterPage() {
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-8"> 
                Register 
            </h1>
            <form className="block max-w-sm mx-auto">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
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