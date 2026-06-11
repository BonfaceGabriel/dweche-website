"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We immerse ourselves in your business, understanding your goals, challenges, and market context to define a clear roadmap.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Our engineers design a scalable, secure system architecture that anticipates growth and adapts to African market conditions.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile sprints with continuous integration. We build incrementally, delivering value at every stage with full transparency.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Production deployment with monitoring, optimisation, and ongoing support. We stay with you as your business grows.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-24 bg-surface-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-blue pointer-events-none" />

      <div className="relative z-10 max-w-site mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-blue-600 text-xs uppercase tracking-[0.15em] font-medium">
            How We Work
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] leading-tight text-surface-900">
            From Concept to{" "}
            <span className="text-gradient-primary">Launch</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                  <div
                    className={`inline-block lg:max-w-lg ${
                      i % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <span className="text-blue-500/60 text-sm font-mono tracking-wider">
                      Step {step.num}
                    </span>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-[family-name:var(--font-heading)] text-surface-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-surface-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500/40 bg-white flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
