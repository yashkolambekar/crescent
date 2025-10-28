"use client";

import React, { useState, useEffect, useCallback } from "react";

type Student = {
  grno: string;
  name: string;
  academicYear: string;
  className: string;
  division: string;
  pendingAmount: number;
};

type NewPaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  student?: Student;
  onSave: (payment: {
    grno: string;
    paymentAmount: number;
    newPending: number;
  }) => void;
};

const NewPaymentModal: React.FC<NewPaymentModalProps> = ({
  isOpen,
  onClose,
  student,
  onSave,
}) => {
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [newPending, setNewPending] = useState<number>(0);

  useEffect(() => {
    if (isOpen && student) {
      setPaymentAmount(0);
      setNewPending(student.pendingAmount);
    }
  }, [isOpen, student]);

  useEffect(() => {
    if (student) {
      const updated = student.pendingAmount - paymentAmount;
      setNewPending(updated >= 0 ? updated : 0);
    }
  }, [paymentAmount, student]);

  const handleSave = useCallback(() => {
    if (!student) return;

    if (paymentAmount <= 0) {
      alert("Payment must be greater than 0");
      return;
    }
    if (paymentAmount > student.pendingAmount) {
      alert("Payment cannot exceed pending");
      return;
    }

    onSave({
      grno: student.grno,
      paymentAmount,
      newPending,
    });
    onClose();
  }, [student, paymentAmount, newPending, onSave, onClose]);

  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl rounded-xl bg-white shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800">
            Record Student Payment
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Summary Info Grid */}
          <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
            <div>
              <p className="text-xs font-medium text-gray-500">GR No</p>
              <p className="text-gray-800 font-semibold">{student.grno}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Pending</p>
              <p className="text-red-600 font-semibold">
                ₹ {student.pendingAmount}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Student</p>
              <p className="text-gray-800">{student.name}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">
                Year / Class
              </p>
              <p className="text-gray-800">
                {student.academicYear} | {student.className}{" "}
                {student.division}
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                This Payment
              </label>
              <input
                type="number"
                value={paymentAmount || ""}
                onChange={(e) =>
                  setPaymentAmount(Number(e.target.value) || 0)
                }
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter amount"
                min="0"
                max={student.pendingAmount}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                New Pending
              </label>
              <div className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-blue-600 font-semibold">
                ₹ {newPending}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={
              paymentAmount <= 0 || paymentAmount > student.pendingAmount
            }
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPaymentModal;