"use client";

import { useState, useEffect } from "react";
import { Loader2, BellRing, Zap, Shield } from "lucide-react";

import LinkResourceTable from "./LinkResourceTable";
import PDFResourceTable from "./PDFResourceTable";
import { getAllTaskDataAction } from "@/features/AdminDashboard/UniversalAlertBoard/Team-meeting-task-data/actions/task-data.actions";
import { getAllCompleteNewAction } from "@/features/AdminDashboard/UniversalAlertBoard/CompleteNewPDF/actions/complete-new.actions";
import { CompleteNewData } from "@/features/AdminDashboard/UniversalAlertBoard/CompleteNewPDF/Types/complete-new.types";
import { TaskData } from "@/features/AdminDashboard/UniversalAlertBoard/Team-meeting-task-data/types/task-data.types";

export default function UniversalAlertBoard() {
  const [linksData, setLinksData] = useState<TaskData[]>([]);
  const [pdfsData, setPdfsData] = useState<CompleteNewData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [linkRes, pdfRes] = await Promise.all([
          getAllTaskDataAction(),
          getAllCompleteNewAction(),
        ]);
        if (linkRes?.success) setLinksData(linkRes.data);
        if (pdfRes?.success) setPdfsData(pdfRes.data);
      } catch (error) {
        console.error("Data fetching error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[420px]">
        <div className="relative flex items-center justify-center w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-emerald-500/10 animate-pulse" />
          <Loader2 className="animate-spin text-emerald-500 relative z-10" size={36} strokeWidth={2.5} />
        </div>
        <p className="mt-5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
          লোড হচ্ছে...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 p-8 md:p-10 shadow-2xl shadow-emerald-900/30">
        {/* decorative circles */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            {/* badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-widest border border-white/20">
              <Zap size={12} className="fill-yellow-300 text-yellow-300" />
              Live Updates
            </span>

            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              Universal{" "}
              <span className="text-yellow-300">Alert Board</span>
            </h1>

            <p className="text-emerald-100/80 text-sm font-medium max-w-md">
              সর্বশেষ নোটিশ, গুরুত্বপূর্ণ লিঙ্ক এবং রিসোর্স ফাইল এখানে পাবেন।
            </p>
          </div>

          {/* stats pills */}
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20">
              <BellRing size={16} className="text-yellow-300" />
              <span className="text-white text-sm font-bold">{linksData.length} লিঙ্ক</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20">
              <Shield size={16} className="text-emerald-200" />
              <span className="text-white text-sm font-bold">{pdfsData.length} ফাইল</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tables Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <LinkResourceTable data={linksData} />
        <PDFResourceTable data={pdfsData} />
      </div>

      {/* ── Footer note ── */}
      <p className="text-center text-[11px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em]">
        রিয়েল-টাইম ডেটাবেজের সাথে সিঙ্ক্রোনাইজড
      </p>
    </div>
  );
}