"use client";

import React from "react";


const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className=" w-screen h-screen flex flex-col items-center p-[1em]">
            <div className="w-[1%] h-[15em]"></div>
            <div className="bg-white p-[2em] rounded-xl min-w-[10em] min-h-[10em] w-full max-w-[35em]">
                <img src={"/logo.png"} className="w-[6em] h-[6em] object-contain mb-[1.5em]"/>
                {children}
            </div>
        </div>
    )

}

export default AuthLayout;