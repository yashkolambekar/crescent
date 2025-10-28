"use client";

import React, { useState } from "react";
import NewPaymentModal from "../NewPaymentModal";


const Parent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [student] = useState({
    grno: "1234",
    name: "John Doe",
    academicYear: "2025-26",
    className: "10",
    division: "A",
    pendingAmount: 5000,
  });

  const handleSave = (payment: {
    grno: string;
    paymentAmount: number;
    newPending: number;
  }) => {
    console.log("Payment saved:", payment);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Open Payment Modal
      </button>

      <NewPaymentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        student={student} 
        onSave={handleSave}
      />
    </div>
  );
};

export default Parent;