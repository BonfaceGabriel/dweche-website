"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "What sets Dweche apart is their ability to build world-class software that actually works in African conditions. Our logistics platform handles low-connectivity environments brilliantly.",
    author: "Grace Okafor",
    role: "CEO, LogiTrack Solutions",
  },
  {
    quote:
      "Working with Dweche felt like extending our own engineering team. Their communication, code quality, and delivery discipline are on par with the best global tech companies.",
    author: "Dr. James Njoroge",
    role: "Head of Digital, MedConnect",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 lg:py-20 bg-surface-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-blue-600 text-xs uppercase tracking-[0.15em] font-medium">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] leading-tight text-surface-900">
            Trusted by{" "}
            <span className="text-gradient-primary">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  className="w-10 h-10 text-blue-500/20 mb-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.655-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.655-2.917-1.179z" />
                </svg>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-[family-name:var(--font-heading)] leading-relaxed text-surface-900">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <div className="text-surface-900 font-semibold">
                    {testimonials[active].author}
                  </div>
                  <div className="text-surface-500 text-sm">
                    {testimonials[active].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-10 bg-blue-600"
                    : "w-6 bg-surface-300 hover:bg-surface-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
