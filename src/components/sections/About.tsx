"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "30+", label: "Team Members" },
  { value: "95%", label: "Client Retention" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div aria-hidden="true" className="absolute top-1/4 -left-32 w-96 h-96 bg-glow-blue pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/4 -right-40 w-80 h-80 bg-glow-green pointer-events-none" />
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600 text-xs uppercase tracking-[0.15em] font-medium">
              About Us
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] leading-tight text-surface-900">
              Building Africa&apos;s{" "}
              <span className="text-gradient-primary">Digital Backbone</span>
            </h2>
            <div className="mt-6 space-y-4 text-surface-600 leading-relaxed">
              <p>
                Dweche Africa is a pan-African software engineering company 
                dedicated to building enterprise-grade digital solutions that 
                address the unique challenges of the African market.
              </p>
              <p>
                Our team of engineers, designers, and strategists combines 
                global best practices with deep local expertise to deliver 
                software that is both world-class and contextually relevant.
              </p>
              <p>
                We partner with businesses across fintech, logistics, 
                healthcare, and government to architect the digital 
                infrastructure that will power Africa&apos;s economic transformation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "ISO 27001 Certified",
                "AWS Advanced Partner",
                "African Tech Alliance",
                "Microsoft Gold Partner",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-surface-700"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-green-600 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-green-500/10 to-transparent rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-surface-300/70 bg-white shadow-md shadow-blue-500/5"
                >
                  <div className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-surface-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-blue-500/20 rounded-full" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-green-500/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
