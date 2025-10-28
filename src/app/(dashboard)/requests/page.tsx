"use client";

import React from "react";

const Requests = () => {
  // 📝 Hardcoded requests data (can be extended later)
  const requests = [
    {
      id: 1,
      requester: "Admin User",
      targetStudent: "John Doe (GRNO: 1234)",
      field: "Pending Amount",
      oldValue: "₹ 5000",
      newValue: "₹ 3000",
      date: "Today",
    },
    {
      id: 2,
      requester: "Finance Staff",
      targetStudent: "Jane Smith (GRNO: 5678)",
      field: "Class & Division",
      oldValue: "10 B",
      newValue: "11 A",
      date: "Yesterday",
    },
    {
      id: 3,
      requester: "Clerk",
      targetStudent: "Michael Lee (GRNO: 9101)",
      field: "Academic Year",
      oldValue: "2024-25",
      newValue: "2025-26",
      date: "Mar 10",
    },
  ];

  const handleApprove = (id: number) => {
    alert(`✅ Change Approved for request #${id}`);
  };

  const handleReject = (id: number) => {
    alert(`❌ Change Rejected for request #${id}`);
  };

  return (
    <div>
      <p className="text-[1.4em] font-semibold">Approval Requests</p>

      <div className="mt-[2em] h-full flex flex-row flex-wrap gap-[2em]">
        {requests.map((req) => (
          <div
            key={req.id}
            className="min-w-[25em] h-fit rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">
                Pending Approval Request
              </h3>
              <span className="text-xs text-gray-500">{req.date}</span>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs text-gray-500">Requester</p>
                <p className="text-gray-800 font-semibold">{req.requester}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Target Student</p>
                <p className="text-gray-800">{req.targetStudent}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">{req.field}</p>
                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-500">
                    {req.oldValue}
                  </span>
                  <span className="text-blue-600 font-medium">
                    → {req.newValue}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => handleReject(req.id)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition"
              >
                Reject
              </button>
              <button
                onClick={() => handleApprove(req.id)}
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;