"use client";

import { useRouter } from "next/navigation";

const Login = () => {

    const router = useRouter();

    return (
        <>
            <p className="text-[1.4em] font-semibold">Login</p>
            <div className="flex flex-col gap-[1em] mt-[1em]">
                <div className="border p-[0.5em] rounded-lg border-gray-200 min-w-[10em] w-full flex flex-row items-center gap-[0.8em]">
                    <img src={"/icons/email-svgrepo-com.svg"} className="w-[1.2em] h-[1.2em]" />
                    <input type="email" placeholder="Email" className="outline-none flex-1" />
                </div>
                <div className="border p-[0.5em] rounded-lg border-gray-200 min-w-[25em] flex flex-row items-center gap-[0.8em]">
                    <img src={"/icons/lock-closed-svgrepo-com.svg"} className="w-[1.2em] h-[1.2em]" />
                    <input type="password" placeholder="Password" className="outline-none flex-1" />
                </div>
                <p className="hover:underline text-[0.8em] text-right cursor-pointer"
                onClick={() => {
                    router.push("/forgot-password")
                }}
                >Forgot Password?</p>
                <button className="border font-semibold p-[0.5em] rounded-lg hover:bg-[#707dec] hover:text-white border-gray-200 min-w-[25em] flex flex-row items-center justify-center gap-[0.8em] cursor-pointer">
                    <p>Login</p>
                </button>
            </div>

        </>
    )
}

export default Login;