"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logitrackImg from "@/assets/Logitrack.png";
import medconnectImg from "@/assets/medconnect.png";
import eduplatformImg from "@/assets/eduplatform.png";
import analyticsImg from "@/assets/analytics.png";
import merchandiseImg from "@/assets/merchandise.png";
import reportsImg from "@/assets/reports.png";

const projects = [
  {
    title: "LogiTrack",
    category: "Logistics",
    desc: "Real-time fleet management system optimising 2,000+ vehicles across East Africa.",
    tags: ["Next.js", "Go", "PostgreSQL", "IoT"],
    image: logitrackImg,
    url: "https://logitrack.vip",
  },
  {
    title: "MedConnect",
    category: "Healthcare",
    desc: "Telemedicine platform connecting 500+ clinics with patients across rural and urban areas.",
    tags: ["React Native", "Python", "FHIR", "GCP"],
    image: medconnectImg,
    url: "https://medconnecthealth.com",
  },
  {
    title: "EduPlatform",
    category: "EdTech",
    desc: "E-learning ecosystem serving 100,000+ students with adaptive learning paths.",
    tags: ["Vue.js", "Django", "Redis", "Docker"],
    image: eduplatformImg,
    url: "https://eduplatform.in",
  },
  {
    title: "BF SUMA \u2013 Eagleshop",
    category: "Retail",
    desc: "Payment and inventory management system streamlining retail operations with real-time stock tracking and multi-channel payment processing.",
    tags: ["React", "Node.js", "PostgreSQL", "Mobile Money"],
    url: "https://app.eagleshop.cloud",
    images: [analyticsImg, merchandiseImg, reportsImg],
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

function TiltedStack({ url, images }: { url: string; images: ReturnType<typeof require>[] }) {
  const configs = [
    { tilt: -7, x: -32, y: 0, z: 0 },
    { tilt: 3, x: 0, y: 20, z: 1 },
    { tilt: 8, x: 28, y: 8, z: 2 },
  ];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full aspect-[16/10] flex items-center justify-center bg-surface-100 overflow-hidden cursor-pointer group"
    >
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl shadow-xl overflow-hidden border-4 border-white"
          style={{
            width: "70%",
            zIndex: configs[i].z,
          }}
          animate={{
            rotate: configs[i].tilt,
            x: configs[i].x,
            y: configs[i].y,
          }}
          whileHover={{
            rotate: 0,
            x: 0,
            y: 0,
            scale: 1.05,
            zIndex: 10,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          <div className="bg-white px-3 py-1.5 border-b border-surface-100">
            <span className="text-[10px] font-semibold text-surface-500 uppercase tracking-wider">
              {i === 0 ? "Analytics" : i === 1 ? "Merchandise" : "Reports"}
            </span>
          </div>
          <Image
            src={img}
            alt={`BF SUMA Eagleshop ${i === 0 ? "Analytics dashboard" : i === 1 ? "Merchandise management" : "Reports dashboard"} — retail software by Dweche Africa`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </a>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = projects.length;

  const goTo = useCallback(
    (i: number) => {
      setDir(i > active ? 1 : -1);
      setActive(i);
    },
    [active]
  );

  const next = useCallback(() => {
    setDir(1);
    setActive((a) => (a + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDir(-1);
    setActive((a) => (a - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const project = projects[active];

  return (
    <section id="work" className="relative py-20 lg:py-24 bg-surface-50">
      <div className="absolute inset-0 bg-noise" />
      <div className="relative z-10 max-w-site mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-blue-600 text-xs uppercase tracking-[0.15em] font-medium">
            Our Work
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] leading-tight text-surface-900">
            <span className="text-gradient-primary">Projects</span> That Deliver
            Impact
          </h2>
          <p className="mt-4 text-surface-600 text-lg leading-relaxed max-w-2xl">
            Every product we ship is designed for African realities — low
            bandwidth, mobile-first, and built to scale.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-surface-300/60 bg-white shadow-sm">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="sm:grid sm:grid-cols-2"
              >
                {"images" in project && project.images ? (
                  <TiltedStack url={project.url} images={project.images} />
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-[16/10] overflow-hidden bg-surface-100 cursor-pointer"
                  >
                    <Image
                      src={project.image!}
                      alt={`${project.title} — ${project.category} software platform built by Dweche Africa`}
                      className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-700"
                    />
                  </a>
                )}

                <div className="relative z-10 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-blue-600 text-xs uppercase tracking-[0.15em] font-medium">
                      {project.category}
                    </span>
                    <span className="w-px h-3 bg-surface-300" />
                    <span className="text-surface-500 text-xs uppercase tracking-wide">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-2xl font-[family-name:var(--font-heading)] text-surface-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-surface-600 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-surface-200 text-surface-600 bg-surface-100"
                      >
                        {tag}
                      </span>
                    ))}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Preview
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-surface-700 hover:bg-white hover:text-blue-600 transition-all z-20 border border-surface-200"
            aria-label="Previous project"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-surface-700 hover:bg-white hover:text-blue-600 transition-all z-20 border border-surface-200"
            aria-label="Next project"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-10 bg-blue-600" : "w-6 bg-surface-300 hover:bg-surface-400"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
