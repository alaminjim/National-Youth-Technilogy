/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight, BookOpen, GraduationCap, Layers } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { useCourseData } from "../../Courses/useCourseData";

const GRID_LIMIT = 8;

export default function Coursess() {
  const { categories, courses, selectedCategory, setSelectedCategory } =
    useCourseData();

  if (courses.isLoading)
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
        <p className="text-gray-400 text-sm tracking-widest uppercase font-semibold">Loading Courses...</p>
      </div>
    );

  const allCourses = courses.data ?? [];
  const useSlider = allCourses.length > GRID_LIMIT;

  const CourseCard = ({ course }: { course: any }) => (
    <div className="group flex flex-col rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/8 overflow-hidden h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600 ease-out"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 bg-cyan-500 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
            <Layers size={8} />
            Course
          </span>
        </div>

        {/* Title on image */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-bold text-[13px] leading-snug line-clamp-2 drop-shadow-md">
            {course.title}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 px-4 pt-3 pb-4 flex-1">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <BookOpen size={10} className="text-cyan-500" />
            Self-paced
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap size={10} className="text-emerald-500" />
            Certificate
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 dark:bg-white/5" />

        {/* CTA */}
        <Link href="/login" className="mt-auto">
          <button className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold rounded-xl text-[11px] uppercase tracking-wider transition-all duration-300 shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/40 active:scale-95">
            <span>View Details</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/60 to-white dark:from-gray-950 dark:via-gray-900/60 dark:to-gray-950 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #00bcd4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/50 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            What We Offer
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Our <span className="text-cyan-500">Courses</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto leading-relaxed mb-6">
            অভিজ্ঞ শিক্ষকদের কাছ থেকে হাতে-কলমে শিখুন এবং আপনার ক্যারিয়ার গড়ুন।
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-200 border ${
              selectedCategory === "All"
                ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/25"
                : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-400"
            }`}
          >
            All Courses
          </button>
          {categories.data?.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/25"
                  : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-400"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ── Courses Grid / Empty ── */}
        {allCourses.length === 0 ? (
          <div className="flex flex-col items-center py-20 px-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-sm">
            {/* Illustration */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/40 dark:to-cyan-900/20 flex items-center justify-center text-5xl shadow-inner border border-cyan-100 dark:border-cyan-900/30">
                📚
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-xs shadow-md">
                0
              </div>
            </div>

            <h3 className="text-gray-800 dark:text-gray-100 font-black text-base mb-2 tracking-wide">
              কোনো কোর্স পাওয়া যায়নি
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm text-center max-w-xs leading-relaxed mb-6">
              এই ক্যাটাগরিতে এখনো কোনো কোর্স যোগ হয়নি। অন্য একটি ক্যাটাগরি দেখুন বা পরে আবার আসুন।
            </p>

            <button
              onClick={() => setSelectedCategory("All")}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              All Courses দেখুন
              <ArrowRight size={12} />
            </button>
          </div>
        ) : (
          <>
            {/* Mobile: slider */}
            <div className="block sm:hidden">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="pb-12 courses-swiper"
              >
                {allCourses.map((course: any) => (
                  <SwiperSlide key={course.id} className="h-auto">
                    <CourseCard course={course} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop */}
            <div className="hidden sm:block">
              {useSlider ? (
                <Swiper
                  modules={[Autoplay, Pagination, Grid]}
                  spaceBetween={20}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  grid={{ rows: 2, fill: "row" }}
                  loop={false}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="pb-12 courses-swiper"
                >
                  {allCourses.map((course: any) => (
                    <SwiperSlide key={course.id} className="h-auto mb-4">
                      <CourseCard course={course} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {allCourses.map((course: any) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <style jsx global>{`
        .courses-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          width: 8px;
          height: 8px;
          opacity: 1;
        }
        .courses-swiper .swiper-pagination-bullet-active {
          background: #06b6d4 !important;
          width: 28px !important;
          border-radius: 20px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
}
