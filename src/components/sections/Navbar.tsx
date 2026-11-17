"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";


const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Articles", href: "/articles", id: "articles" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const activeId = isHome ? activeSection : pathname.startsWith("/articles") ? "articles" : "";
  const linkHref = (href: string) => href.startsWith("#") && !isHome ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = navLinks.filter((link) => link.href.startsWith("#")).map((link) => link.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-white/85 backdrop-blur-xl border-b border-surface-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href={linkHref("#home")} aria-label="Dweche Africa home" className="inline-flex shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
            <BrandLogo priority />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={linkHref(link.href)}
                aria-current={activeId === link.id ? (isHome ? "location" : "page") : undefined}
                className={`px-4 py-2 text-sm transition-colors duration-300 relative group ${
                  activeId === link.id
                    ? "text-blue-600"
                    : "text-surface-700 hover:text-surface-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-[1px] bg-blue-500 transition-transform duration-300 origin-left ${
                    activeId === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
            <a
              href={linkHref("#contact")}
              className="ml-4 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-primary-sm"
            >
              Get in Touch
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-surface-900"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-surface-900"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-surface-900"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-surface-200 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={linkHref(link.href)}
                  aria-current={activeId === link.id ? (isHome ? "location" : "page") : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeId === link.id
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-surface-700 hover:text-surface-900 hover:bg-surface-100"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={linkHref("#contact")}
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-blue-600 text-white text-center font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
