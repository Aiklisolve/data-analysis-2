"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="relative flex items-center justify-center gap-1.5 bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-sm border border-slate-100">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
              active
                ? "text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {active && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
    