/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Award, 
  Target, 
  Briefcase 
} from "lucide-react";

const advantages = [
  { icon: BookOpen, title: "Modern Curriculum", description: "Industry-aligned, updated regularly to meet market demands." },
  { icon: Users, title: "Expert Mentors", description: "Learn from industry professionals with years of experience." },
  { icon: Award, title: "Recognized Certificate", description: "Get certified and stand out in the job market." },
  { icon: Target, title: "Career Focused", description: "Practical skills training for immediate career growth." },
  { icon: Briefcase, title: "Placement Support", description: "Dedicated support to help you land your dream job." },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#070707] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-green-600 dark:text-green-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
            Core Philosophy
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-5 leading-tight">
            Our <span className="text-green-600">Advantages</span>
          </h2>

          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            বাংলাদেশ ন্যাশনাল ইয়ুথ টেকনিক্যাল ইনস্টিটিউট শিক্ষার্থীদের সেরা
            প্রযুক্তিগত শিক্ষা ও দক্ষতা উন্নয়নে প্রতিশ্রুতিবদ্ধ।
          </p>

          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-600" />
            <div className="w-2 h-2 rounded-full bg-green-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-600" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#121212] p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-xl shadow-black/5 hover:border-green-600/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                <adv.icon size={28} />
              </div>
              <h3 className="font-black text-lg text-gray-900 dark:text-white mb-2">{adv.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
