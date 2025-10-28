"use client";

import { usePathname, useRouter } from "next/navigation";
import path from "path";

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const router = useRouter();

    const path = usePathname();

    const navItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "/icons/meter-svgrepo-com.svg"
        },
        {
            name: "Students",
            path: "/students",
            icon: "/icons/student-person-3-svgrepo-com.svg"
        },
        {
            name: "Fees",
            path: "/fees",
            icon: "/icons/bill-check-svgrepo-com.svg"
        },
        {
            name: "Logs",
            path: "/logs",
            icon: "/icons/book-svgrepo-com.svg",
        },
        {
            name: "Users",
            path: "/users",
            icon: "/icons/users-svgrepo-com.svg"
        },
        {
            name: "Requests",
            path: "/requests",
            icon: "/icons/attention-circle-svgrepo-com.svg"
        }
    ]


    return (
        <>
            <div className="p-[1em] flex flex-col w-full">

                <div className="w-full flex flex-row justify-center items-center">
                    <div className="w-full max-w-[100em] flex flex-row gap-[2em] items-center">
                        <div>
                            <div className="flex flex-row items-center">
                                <img src={"/logo.png"} className="w-[5em] h-[5em] object-contain bg-blend-multiply" />
                                <div className="ml-[1em]">
                                    <p className="text-[1.2em] font-bold">Crescent English School </p>
                                    <p>Sec 19, Ulwe, Navi Mumbai</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                    <div className="w-full max-w-[100em] flex flex-row gap-[2em] my-[1em]">
                        <div className="bg-white py-[2em] rounded-xl border border-gray-200 px-[1.5em] h-full shrink-0 ">
                            <div className="flex flex-col gap-[0.5em]">
                                {
                                    navItems.map((item) => {
                                        return (
                                            <div className={`px-[1em] py-[0.5em] font-medium min-w-[10em] rounded-md flex flex-row gap-[1em] items-center cursor-pointer  ${item.path == path ? "bg-[#d9ddff]" : ""}`}
                                                onClick={() => {
                                                    router.push(item.path);
                                                }}
                                            >
                                                <img src={item.icon} className="w-[1.4em] h-[1.4em] object-contain" alt="" />
                                                <p>{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-full flex flex-col flex-1">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default DashboardLayout;