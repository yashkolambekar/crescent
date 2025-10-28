"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PastPayments from "./PastPayments";
import { useState } from "react";
import NewPaymentModal from "../NewPaymentModal";

const StudentPage = () => {
    const [editMode, setEditMode] = useState(false);

    const inputStyle = `font-semibold min-w-[15em] ${editMode ? "border border-gray-200 p-[0.3em] rounded" : ""
        }`;

    const textareaStyle = `font-semibold min-w-[15em] min-h-[6em] resize-none ${editMode ? "border border-gray-200 p-[0.3em] rounded" : ""
        }`;

    const selectStyle = `font-semibold min-w-[15em] ${editMode ? "border border-gray-200 p-[0.3em] rounded" : ""
        }`;

    const [isOpen, setIsOpen] = useState(false);
    const [studentmodal] = useState({
        grno: "1234",
        name: "John Doe",
        academicYear: "2025-26",
        className: "10",
        division: "A",
        pendingAmount: 5000,
    });

    return (
        <>

            <p className="text-[1.4em] font-semibold">Student Information</p>

            <NewPaymentModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                student={studentmodal}
                onSave={() => {

                }}
            />

            <div className="w-full py-[1em] px-[2em] rounded-xl min-h-[2em] bg-white mt-[1em] flex flex-col">
                <div className="flex flex-col gap-[2em]">
                    <div className="w-[10em] h-[12em] border border-gray-200 rounded-xl overflow-hidden">
                        <img
                            src={"https://picsum.photos/720"}
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>

                    <div className="flex flex-row gap-[2em]">
                        <div>
                            <p className="text-[0.8em]">First Name</p>
                            <input
                                className={inputStyle}
                                value={"Yash"}
                                placeholder={editMode ? "Enter First Name" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>

                        <div>
                            <p className="text-[0.8em]">Father's Name</p>
                            <input
                                className={inputStyle}
                                value={"Santosh"}
                                placeholder={editMode ? "Enter Father's Name" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>

                        <div>
                            <p className="text-[0.8em]">Mother's Name</p>
                            <input
                                className={inputStyle}
                                value={"Smita"}
                                placeholder={editMode ? "Enter Mother's Name" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>

                        <div>
                            <p className="text-[0.8em]">Last Name</p>
                            <input
                                className={inputStyle}
                                value={"Kolambekar"}
                                placeholder={editMode ? "Enter Last Name" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-[2em]">
                        <div>
                            <p className="text-[0.8em]">Class</p>
                            <select
                                className={selectStyle}
                                disabled={!editMode}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    {editMode ? "Select Class" : "N/A"}
                                </option>
                                {Array.from({ length: 10 }, (_, i) => ({
                                    label: `${i + 1}`,
                                    value: `${i + 1}`,
                                })).map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <p className="text-[0.8em]">Division</p>
                            <select
                                className={selectStyle}
                                disabled={!editMode}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    {editMode ? "Select Division" : "N/A"}
                                </option>
                                {["A", "B", "C", "D"].map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <p className="text-[0.8em]">Roll no</p>
                            <input
                                className={inputStyle}
                                value={"23"}
                                placeholder={editMode ? "Enter Roll No" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-[2em]">
                        <div>
                            <p className="text-[0.8em]">Admission ID</p>
                            <input
                                className={inputStyle}
                                value={"9283293"}
                                placeholder={editMode ? "Enter Admission ID" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>

                        <div>
                            <p className="text-[0.8em]">GRNO</p>
                            <input
                                className={inputStyle}
                                value={"9283293"}
                                placeholder={editMode ? "Enter GRNO" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                    </div>

                    <div>
                        <p className="text-[0.8em]">Date of Birth</p>
                        <DatePicker
                            className={inputStyle}
                            disabled={!editMode}
                            placeholderText={editMode ? "Select Date of Birth" : "N/A"}
                        />
                    </div>

                    <div className="flex flex-row gap-[2em]">
                        <div>
                            <p className="text-[0.8em]">Mobile No 1</p>
                            <input
                                className={inputStyle}
                                value={"9283293"}
                                placeholder={editMode ? "Enter Mobile No 1" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                        <div>
                            <p className="text-[0.8em]">Mobile No 2</p>
                            <input
                                className={inputStyle}
                                value={"9283293"}
                                placeholder={editMode ? "Enter Mobile No 2" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                        <div>
                            <p className="text-[0.8em]">Mobile No 3</p>
                            <input
                                className={inputStyle}
                                value={"9283293"}
                                placeholder={editMode ? "Enter Mobile No 3" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                        <div>
                            <p className="text-[0.8em]">Mobile No 4</p>
                            <input
                                className={inputStyle}
                                value={""}
                                placeholder={editMode ? "Enter Mobile No 4" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-[2em]">
                        <div>
                            <p className="text-[0.8em]">Address</p>
                            <textarea
                                className={textareaStyle}
                                value={"D/H-1/14,CHEETA CAMP, TROMBAY, MUMBAI "}
                                placeholder={editMode ? "Enter Address" : "N/A"}
                                readOnly={!editMode}
                            ></textarea>
                        </div>

                        <div>
                            <p className="text-[0.8em]">Pincode</p>
                            <input
                                className={inputStyle}
                                value={"400088"}
                                placeholder={editMode ? "Enter Pincode" : "N/A"}
                                readOnly={!editMode}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex mt-[1em]">
                    <button
                        className={`text-[1em] ${editMode ? "bg-gray-500" : "bg-[#4355ff]"
                            } text-white font-semibold px-[1em] py-[0.4em] rounded-md cursor-pointer`}
                        onClick={() => {
                            setEditMode(!editMode);
                        }}
                    >
                        {editMode ? "Cancel" : "Edit Details"}
                    </button>
                </div>
            </div>



            <div
                className="w-full py-[1em] px-[2em] rounded-xl min-h-[2em] bg-white mt-[1em] flex flex-col"
            >
                <p className="text-[1.2em] font-medium">Fees Related Information</p>

                <div className="w-full flex flex-row-reverse">
                    <button className="text-[1em] bg-[#4355ff] text-white font-semibold px-[1em] py-[0.4em] rounded-md cursor-pointer"
                    onClick={() => {
                        setIsOpen(true);
                    }}
                    >Add Payment</button>
                </div>

                <p>This Academic Year</p>

                <div className="flex flex-row gap-[1em] mt-[1em]">


                    <div className="rounded-md border border-gray-200 py-[1em] px-[2em] min-w-[20em]">
                        <p className="text-[0.9em]">Fees Paid</p>
                        <p className="text-[1.5em] font-semibold">₹2000000</p>
                    </div>

                    <div className="rounded-md border border-gray-200 py-[1em] px-[2em] min-w-[20em]">
                        <p className="text-[0.9em]">Fees Pending</p>
                        <p className="text-[1.5em] font-semibold">₹0</p>
                    </div>

                </div>

                <p className="mt-[2em]">Past Payments</p>

                <div className="mt-[1em]">
                    <PastPayments />
                </div>

            </div>


        </>
    )
}

export default StudentPage;