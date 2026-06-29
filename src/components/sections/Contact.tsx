"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { contactAction, type FormState } from "@/actions/contact";

const initialState: FormState = { success: false, message: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(contactAction, initialState);

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
            action={formAction}
          >
            <div
              aria-hidden="true"
              className="absolute opacity-0 pointer-events-none"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                />
                {state.errors?.name && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-300 text-surface-900 placeholder:text-surface-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                />
                {state.errors?.email && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-300 text-surface-900 placeholder:text-surface-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
              />
              {state.errors?.subject && (
                <p className="mt-1 text-xs text-red-500">{state.errors.subject}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project"
                className="w-full px-5 py-3.5 rounded-xl bg-surface-50 border border-surface-300 text-surface-900 placeholder:text-surface-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300 resize-none"
              />
              {state.errors?.message && (
                <p className="mt-1 text-xs text-red-500">{state.errors.message}</p>
              )}
            </div>

            {state.message && (
              <div
                className={`px-4 py-3 rounded-xl text-sm ${
                  state.success
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {state.message}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-primary text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {pending && (
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {pending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
