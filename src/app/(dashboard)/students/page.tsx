import StudentTable from "./StudentTable/page";

const Students = () => {
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
        },
        {
            label: "Fees Status",
            options: [
                {
                    label: "All",
                    value: "*"
                },
                {
                    label: "Pending",
                    value: "pending"
                },
                {
                    label: "Partial",
                    value: "partial"
                },
                {
                    label: "Paid",
                    value: "paid"
                }
            ]
        }
    ];

    return (
        <>
            <p className="text-[1.4em] font-semibold">Student Management Console</p>

            <div className="w-full flex flex-row-reverse">
                <button className="text-[1em] bg-[#4355ff] text-white font-semibold px-[1em] py-[0.4em] rounded-md cursor-pointer">Add New</button>
            </div>

            <div className="w-full min-h-[1em] bg-white rounded-xl mt-[1em] flex flex-row gap-[2em] py-[2em] px-[2em]">
                {
                    filters.map((filter) => {
                        return (
                            <div>
                                <p className="text-[0.8em] pl-[0.2em] mb-[0.2em]">{filter.label}</p>
                                <select
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
                <div>
                    <p className="text-[0.8em] pl-[0.2em] mb-[0.2em]">Search</p>
                    <input
                        name=""
                        id=""
                        placeholder="Search by GR number or Name"
                        className="border border-gray-300 rounded-md px-[0.8em] py-[0.4em] focus:outline-none focus:ring-2 focus:ring-[#4355ff] focus:border-transparent min-w-[10em] font-medium placeholder:text-[0.8em]"
                    ></input>
                </div>
            </div>

            <StudentTable />
        </>

    )
}

export default Students;