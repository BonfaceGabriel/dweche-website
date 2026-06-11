"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-glow-blue pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-glow-green pointer-events-none" />
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
            Contact
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] leading-tight text-surface-900">
            Let&apos;s Build{" "}
            <span className="text-gradient-primary">Something</span>{" "}
            Extraordinary
          </h2>
          <p className="mt-4 text-surface-600 text-lg leading-relaxed max-w-2xl">
            Ready to transform your business with world-class software?
            Reach out and let&apos;s start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              {
                label: "Email",
                value: "hello@dwecheafrica.com",
                href: "mailto:hello@dwecheafrica.com",
              },
              {
                label: "Phone",
                value: "+254 700 123 456",
                href: "tel:+254700123456",
              },
              {
                label: "Location",
                value: "Nairobi, Kenya\nLagos, Nigeria\nKigali, Rwanda",
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-xs uppercase tracking-[0.15em] text-blue-600 font-medium mb-1">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-surface-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-surface-900 whitespace-pre-line">
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-300 text-surface-900 placeholder:text-surface-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-300 text-surface-900 placeholder:text-surface-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Tell us about your project"
                className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-300 text-surface-900 placeholder:text-surface-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-primary text-sm tracking-wide"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
