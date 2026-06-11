"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = Array.from({ length: 28 }, (_, i) => `/images/clients/logo-${i + 1}.png`);

export default function Clients() {
  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-blue-600 text-xs uppercase tracking-[0.15em] font-medium">
            Trusted By
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-surface-900">
            Our <span className="text-gradient-primary">Clients</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex gap-8 items-center animate-scroll">
              {Array.from({ length: 3 }).map((_, set) => (
                <div key={set} className="flex gap-8 items-center shrink-0">
                  {logos.map((src, i) => (
                    <Image
                      key={`${set}-${i}`}
                      src={src}
                      alt={`Client logo ${i + 1} — trusted by Dweche Africa`}
                      width={140}
                      height={140}
                      className="h-20 w-auto object-contain"
                    />
                  ))}
                  <div className="w-px h-10 bg-surface-200" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
