const PastPayments = () => {


    // Define types
    type PaymentRecord = {
        grNo: string;
        paymentAmount: string;
        pendingAmount: string;
        academicYear: string;
        paymentDate: string;
        paymentMethod: string;
        receiptNo: string;
        status: string;
    };

    type TableHeader = {
        key: keyof PaymentRecord | 'actions';
        label: string;
    };

    // Headers
    const tableHeaders: TableHeader[] = [
        { key: 'paymentAmount', label: 'Payment Amount' },
        { key: 'pendingAmount', label: 'Pending Amount' },
        { key: 'academicYear', label: 'Academic Year' },
        { key: 'paymentDate', label: 'Payment Date' },
        { key: 'paymentMethod', label: 'Payment Method' },
        { key: 'receiptNo', label: 'Receipt No.' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Actions' }
    ];

    // Sample data
    const paymentData: PaymentRecord[] = [
        { grNo: 'GR001', paymentAmount: '₹5,000', pendingAmount: '₹0', academicYear: '2024-25', paymentDate: '2024-01-15', paymentMethod: 'Online', receiptNo: 'RCT-001', status: 'Completed' },
        { grNo: 'GR002', paymentAmount: '₹2,500', pendingAmount: '₹2,500', academicYear: '2024-25', paymentDate: '2024-01-16', paymentMethod: 'Cash', receiptNo: 'RCT-002', status: 'Partial' },
        { grNo: 'GR003', paymentAmount: '₹0', pendingAmount: '₹5,000', academicYear: '2024-25', paymentDate: '', paymentMethod: 'Pending', receiptNo: 'N/A', status: 'Pending' },
        { grNo: 'GR004', paymentAmount: '₹5,500', pendingAmount: '₹0', academicYear: '2024-25', paymentDate: '2024-01-14', paymentMethod: 'Cheque', receiptNo: 'RCT-003', status: 'Completed' },
        { grNo: 'GR005', paymentAmount: '₹0', pendingAmount: '₹5,500', academicYear: '2024-25', paymentDate: '', paymentMethod: 'Pending', receiptNo: 'N/A', status: 'Pending' },
        { grNo: 'GR006', paymentAmount: '₹6,000', pendingAmount: '₹0', academicYear: '2024-25', paymentDate: '2024-01-13', paymentMethod: 'Online', receiptNo: 'RCT-004', status: 'Completed' },
        { grNo: 'GR007', paymentAmount: '₹3,000', pendingAmount: '₹3,000', academicYear: '2024-25', paymentDate: '2024-01-17', paymentMethod: 'Cash', receiptNo: 'RCT-005', status: 'Partial' },
        { grNo: 'GR008', paymentAmount: '₹0', pendingAmount: '₹6,500', academicYear: '2024-25', paymentDate: '', paymentMethod: 'Pending', receiptNo: 'N/A', status: 'Pending' },
        { grNo: 'GR009', paymentAmount: '₹7,000', pendingAmount: '₹0', academicYear: '2024-25', paymentDate: '2024-01-12', paymentMethod: 'Online', receiptNo: 'RCT-006', status: 'Completed' },
        { grNo: 'GR010', paymentAmount: '₹0', pendingAmount: '₹5,000', academicYear: '2024-25', paymentDate: '', paymentMethod: 'Pending', receiptNo: 'N/A', status: 'Pending' },
        { grNo: 'GR011', paymentAmount: '₹1,500', pendingAmount: '₹3,500', academicYear: '2024-25', paymentDate: '2024-01-18', paymentMethod: 'Cash', receiptNo: 'RCT-007', status: 'Partial' },
        { grNo: 'GR012', paymentAmount: '₹0', pendingAmount: '₹5,500', academicYear: '2024-25', paymentDate: '', paymentMethod: 'Pending', receiptNo: 'N/A', status: 'Pending' },
        { grNo: 'GR009', paymentAmount: '₹7,000', pendingAmount: '₹0', academicYear: '2024-25', paymentDate: '2024-01-12', paymentMethod: 'Online', receiptNo: 'RCT-006', status: 'Completed' },
        { grNo: 'GR010', paymentAmount: '₹0', pendingAmount: '₹5,000', academicYear: '2024-25', paymentDate: '', paymentMethod: 'Pending', receiptNo: 'N/A', status: 'Pending' },
        { grNo: 'GR011', paymentAmount: '₹1,500', pendingAmount: '₹3,500', academicYear: '2024-25', paymentDate: '2024-01-18', paymentMethod: 'Cash', receiptNo: 'RCT-007', status: 'Partial' },
        { grNo: 'GR012', paymentAmount: '₹0', pendingAmount: '₹5,500', academicYear: '2024-25', paymentDate: '', paymentMethod: 'Pending', receiptNo: 'N/A', status: 'Pending' },
    ];

    return (
        <>
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
                    {paymentData.map((payment, index) => (
                        <tr
                            key={payment.grNo}
                            className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                        >
                            {tableHeaders.map((header) => {
                                return (
                                    <td key={header.key} className="px-[1em] py-[0.8em]">
                                        {payment[header.key as keyof PaymentRecord]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}

export default PastPayments;