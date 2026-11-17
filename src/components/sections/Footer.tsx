"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-200 bg-white py-16 lg:py-20">
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Dweche Africa home" className="mb-4 inline-flex rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
              <BrandLogo />
            </Link>
            <p className="text-sm text-surface-600 leading-relaxed max-w-xs">
              Engineering world-class software solutions that power African
              enterprise and drive digital transformation across the continent.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-blue-600 font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Custom Development",
                "Cloud Architecture",
                "Fintech Solutions",
                "Data & AI",
                "Digital Transformation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    className="text-sm text-surface-500 hover:text-surface-900 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-blue-600 font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Process", "Work", "Careers", "Articles"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Articles" ? "/articles" : `/#${item.toLowerCase()}`}
                    className="text-sm text-surface-500 hover:text-surface-900 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-blue-600 font-medium mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Twitter / X", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "hello@dwecheafrica.com", href: "mailto:hello@dwecheafrica.com" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-surface-600 hover:text-surface-900 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-surface-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-500">
            &copy; {new Date().getFullYear()} Dweche Africa. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-surface-500 hover:text-surface-700 transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
