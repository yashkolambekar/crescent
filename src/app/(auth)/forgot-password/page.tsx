
const ForgotPassword = () => {
    return (
        <>
            <p className="text-[1.4em] font-semibold">Forgot Password</p>
            <p className="text-balance text-[0.8em]">Please enter your password below to receive a password reset link</p>
            <div className="flex flex-col gap-[1em] mt-[1em]">
                <div className="border p-[0.5em] rounded-lg border-gray-200 min-w-[25em] flex flex-row items-center gap-[0.8em]">
                    <img src={"/icons/email-svgrepo-com.svg"} className="w-[1.2em] h-[1.2em]" />
                    <input type="email" placeholder="Email" className="outline-none flex-1" />
                </div>
                <button className="border font-semibold p-[0.5em] rounded-lg hover:bg-[#707dec] hover:text-white border-gray-200 min-w-[25em] flex flex-row items-center justify-center gap-[0.8em] cursor-pointer">
                    <p>Send</p>
                </button>
            </div>

        </>
    )
}

export default ForgotPassword;