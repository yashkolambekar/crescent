"use client";

import { useRouter } from "next/navigation";

const StudentTable = () => {

// Define types
type Student = {
    grNo: string;
    name: string;
    rollNo: string;
    class: string;
    division: string;
    feeAmount: string;
    paidAmount: string;
    status: string;
};

type TableHeader = {
    key: keyof Student | 'actions';
    label: string;
};

// Headers
const tableHeaders: TableHeader[] = [
    { key: 'grNo', label: 'GR No.' },
    { key: 'name', label: 'Name' },
    { key: 'rollNo', label: 'Roll No.' },
    { key: 'class', label: 'Class' },
    { key: 'division', label: 'Division' },
    { key: 'feeAmount', label: 'Fee Amount' },
    { key: 'paidAmount', label: 'Paid Amount' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' }
];

// Sample data
const studentData: Student[] = [
    { grNo: 'GR001', name: 'Aarav Sharma', rollNo: '001', class: '1', division: 'A', feeAmount: '₹5,000', paidAmount: '₹5,000', status: 'Paid' },
    { grNo: 'GR002', name: 'Vivaan Patel', rollNo: '002', class: '1', division: 'A', feeAmount: '₹5,000', paidAmount: '₹2,500', status: 'Partial' },
    { grNo: 'GR003', name: 'Aditya Kumar Kolambekar', rollNo: '003', class: '1', division: 'B', feeAmount: '₹5,000', paidAmount: '₹0', status: 'Pending' },
    { grNo: 'GR004', name: 'Vihaan Singh', rollNo: '004', class: '2', division: 'A', feeAmount: '₹5,500', paidAmount: '₹5,500', status: 'Paid' },
    { grNo: 'GR005', name: 'Arjun Gupta', rollNo: '005', class: '2', division: 'B', feeAmount: '₹5,500', paidAmount: '₹0', status: 'Pending' },
    { grNo: 'GR006', name: 'Sai Reddy', rollNo: '006', class: '3', division: 'A', feeAmount: '₹6,000', paidAmount: '₹6,000', status: 'Paid' },
    { grNo: 'GR007', name: 'Krishna Iyer', rollNo: '007', class: '3', division: 'C', feeAmount: '₹6,000', paidAmount: '₹3,000', status: 'Partial' },
    { grNo: 'GR008', name: 'Ayush Joshi', rollNo: '008', class: '4', division: 'A', feeAmount: '₹6,500', paidAmount: '₹0', status: 'Pending' },
    { grNo: 'GR009', name: 'Ishaan Mehta', rollNo: '009', class: '5', division: 'B', feeAmount: '₹7,000', paidAmount: '₹7,000', status: 'Paid' },
    { grNo: 'GR010', name: 'Rudra Agarwal', rollNo: '010', class: '1', division: 'C', feeAmount: '₹5,000', paidAmount: '₹0', status: 'Pending' },
    { grNo: 'GR011', name: 'Anaya Singh', rollNo: '011', class: '1', division: 'D', feeAmount: '₹5,000', paidAmount: '₹1,500', status: 'Partial' },
    { grNo: 'GR012', name: 'Kavya Patel', rollNo: '012', class: '2', division: 'C', feeAmount: '₹5,500', paidAmount: '₹0', status: 'Pending' },
    { grNo: 'GR009', name: 'Ishaan Mehta', rollNo: '009', class: '5', division: 'B', feeAmount: '₹7,000', paidAmount: '₹7,000', status: 'Paid' },
    { grNo: 'GR010', name: 'Rudra Agarwal', rollNo: '010', class: '1', division: 'C', feeAmount: '₹5,000', paidAmount: '₹0', status: 'Pending' },
    { grNo: 'GR011', name: 'Anaya Singh', rollNo: '011', class: '1', division: 'D', feeAmount: '₹5,000', paidAmount: '₹1,500', status: 'Partial' },
    { grNo: 'GR012', name: 'Kavya Patel', rollNo: '012', class: '2', division: 'C', feeAmount: '₹5,500', paidAmount: '₹0', status: 'Pending' },
];

// Status badge color mapping (soft pastel tones)
const getStatusColor = (status: string) => {
    switch (status) {
        case 'Paid': return 'bg-green-100 text-green-800 border border-green-200';
        case 'Partial': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
        case 'Pending': return 'bg-red-100 text-red-800 border border-red-200';
        default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
};

const router = useRouter();

// Render table
return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 mt-[1em] overflow-hidden p-[1em]">
        <table className="w-full text-left text-sm text-gray-700">
            <thead className=" text-gray-600 font-medium">
                <tr>
                    {tableHeaders.map((header) => (
                        <th key={header.key} className="px-[1em] py-[0.8em] border-b border-gray-200 text-xs uppercase tracking-wider">
                            {header.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {studentData.map((student, index) => (
                    <tr 
                        key={student.grNo} 
                        className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                        {tableHeaders.map((header) => {
                            if (header.key === 'status') {
                                return (
                                    <td key={header.key} className="px-[1em] py-[0.8em]">
                                        <span className={`px-[0.6em] py-[0.2em] rounded-full text-xs font-medium ${getStatusColor(student[header.key])}`}>
                                            {student[header.key]}
                                        </span>
                                    </td>
                                );
                            }

                            if (header.key === 'actions') {
                                return (
                                    <td key={header.key} className="px-[1em] py-[0.8em] flex gap-[0.5em]">
                                        <button className="font-medium cursor-pointer text-xs px-[0.5em] py-[0.2em] text-blue-600 hover:bg-blue-100 rounded"
                                        onClick={() => {
                                            router.push("/students/9829382")
                                        }}
                                        >View</button>
                                        <button className="font-medium cursor-pointer text-xs px-[0.5em] py-[0.2em] text-yellow-600 hover:bg-yellow-100 rounded">Edit</button>
                                        
                                    </td>
                                );
                            }

                            return (
                                <td key={header.key} className="px-[1em] py-[0.8em]">
                                    {student[header.key as keyof Student]}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

}
export default StudentTable;