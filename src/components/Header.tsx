"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/media", label: "Media" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-title text-2xl uppercase tracking-tight text-white transition-colors hover:text-white/80"
        >
          Juno Love
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? "text-white underline underline-offset-4"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`text-base font-medium transition-colors ${
              pathname === "/contact"
                ? "text-white underline underline-offset-4"
                : "text-white/70 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
