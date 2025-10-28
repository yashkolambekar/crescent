"use client";

import StyledGauge from "@/components/StyledGauge";
import { useMemo, useState } from "react";

const Fees = () => {

    const [standard, setStandard] = useState("*");
    const [division, setDivison] = useState("*");


    const stats = useMemo(() => {
        const seed = (standard + "-" + division)
            .split("")
            .reduce((acc, c) => acc + c.charCodeAt(0), 0);

        const rand = (n: number) => {
            const x = Math.sin(seed + n) * 10000;
            return x - Math.floor(x);
        };

        const makeStat = (label: string, offset: number) => {
            const total = Math.floor(rand(offset) * 200) + 50; // total between 50–250
            const value = Math.floor(rand(offset + 1) * total);
            return { label, value, total };
        };

        return [
            makeStat("Paid", 1),
            makeStat("Partial", 3),
            makeStat("Pending", 5),
        ];
    }, [standard, division]);





    const filters = [
        {
            label: "Class",
            options: [
                {
                    label: "All",
                    value: "*"
                },
                ...Array.from({ length: 10 }, (_, i) => ({
                    label: `Class ${i + 1}`,
                    value: `${i + 1}`
                }))
            ]
        },
        {
            label: "Division",
            options: [
                {
                    label: "All",
                    value: "*"
                },
                ...['A', 'B', 'C', 'D'].map(division => ({
                    label: division,
                    value: division
                }))
            ]
        }
    ];


    return (
        <>
            <p className="text-[1.4em] font-semibold">Fees Management Console</p>

            <div className="min-h-[1em] bg-white rounded-xl mt-[1em] w-fit flex flex-row gap-[2em] py-[2em] px-[2em]">
                {
                    filters.map((filter) => {
                        return (
                            <div>
                                <p className="text-[0.8em] pl-[0.2em] mb-[0.2em]">{filter.label}</p>
                                <select
                                    onChange={(e) => {
                                        if (filter.label == "Class") {
                                            setStandard(e.target.value);
                                        } else {
                                            setDivison(e.target.value);
                                        }
                                    }}
                                    name=""
                                    id=""
                                    className="border border-gray-300 rounded-md px-[0.8em] py-[0.4em] focus:outline-none focus:ring-2 focus:ring-[#4355ff] focus:border-transparent min-w-[10em] font-medium"
                                >
                                    {
                                        filter.options.map((opt) => {
                                            return (
                                                <option
                                                    label={opt.label}
                                                    value={opt.value}
                                                    className="py-[0.2em]"
                                                ></option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        )
                    })
                }
            </div>

            <div className="w-full flex flex-row gap-[1em] mt-[1em]">

                {
                    stats.map((stat) => {
                        return (
                            <div className="bg-white border border-gray-200 p-[1em] rounded-xl">
                                <StyledGauge
                                    value={stat.value}
                                    valueMax={stat.total}
                                    label={stat.label}
                                />
                            </div>
                        )
                    })
                }


            </div>

        </>
    )
}

export default Fees;