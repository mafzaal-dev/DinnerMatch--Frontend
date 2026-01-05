"use client";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#F5F5F5] mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111121] border border-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-[#FFAA55]">0</p>
        </div>
        <div className="bg-[#111121] border border-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-2">Total Dinners</h2>
          <p className="text-3xl font-bold text-[#FFAA55]">0</p>
        </div>
        <div className="bg-[#111121] border border-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-2">Active Bookings</h2>
          <p className="text-3xl font-bold text-[#FFAA55]">0</p>
        </div>
      </div>
    </div>
  );
}

