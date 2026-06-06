"use client";

import { Lightbulb, ThumbsUp, Clock, Users, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "আধুনিক প্রযুক্তি ও উদ্ভাবনী পদ্ধতিতে শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করা হয়।",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
  },
  {
    icon: ThumbsUp,
    title: "Quality",
    description:
      "অভিজ্ঞ শিক্ষকমণ্ডলী ও মানসম্মত পাঠ্যক্রমের মাধ্যমে সর্বোচ্চ মানের শিক্ষা নিশ্চিত করা হয়।",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
    border: "rgba(14,165,233,0.2)",
  },
  {
    icon: Clock,
    title: "Experience",
    description:
      "দীর্ঘ অভিজ্ঞতাসম্পন্ন প্রশিক্ষকদের তত্ত্বাবধানে হাতে-কলমে পেশাদার প্রশিক্ষণ দেওয়া হয়।",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    icon: Users,
    title: "Happy Students",
    description:
      "হাজারো সফল শিক্ষার্থী আজ দেশে-বিদেশে সম্মানজনক পেশায় নিযুক্ত — এটাই আমাদের অহংকার।",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "শিক্ষার্থীদের যেকোনো সমস্যায় সার্বক্ষণিক গাইডেন্স ও সহায়তা সেবা প্রদান করা হয়।",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
  },
];

export const Advantages = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/50 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-5 leading-tight">
            Our <span className="text-cyan-500">Advantages</span>
          </h2>

          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            বাংলাদেশ ন্যাশনাল ইয়ুথ টেকনিক্যাল ইনস্টিটিউট শিক্ষার্থীদের সেরা
            প্রযুক্তিগত শিক্ষা ও দক্ষতা উন্নয়নে প্রতিশ্রুতিবদ্ধ।
          </p>

          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl border bg-white dark:bg-gray-900 cursor-default transition-all duration-300"
                style={{
                  borderColor: item.border,
                  boxShadow: `0 2px 20px ${item.bg}`,
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-full transition-all duration-300 group-hover:w-3/4"
                  style={{ background: item.color }}
                />

                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: item.bg,
                    border: `1.5px solid ${item.border}`,
                  }}
                >
                  <Icon
                    size={26}
                    style={{ color: item.color }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[13px] font-black uppercase tracking-widest mb-3"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-8 h-px mb-3 mx-auto transition-all duration-300 group-hover:w-12"
                  style={{ background: item.color, opacity: 0.4 }}
                />

                {/* Description */}
                <p className="text-[12.5px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
