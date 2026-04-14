"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-amber-500 rounded-md p-1.5">
              <Shield size={18} className="text-slate-900" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              AutoAdvisor<span className="text-amber-400"> UK</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/directory" className="text-slate-300 hover:text-white transition-colors">
              Find Professionals
            </Link>
            <Link href="/register" className="text-slate-300 hover:text-white transition-colors">
              Join as Professional
            </Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/admin" className="text-slate-300 hover:text-white transition-colors">
              Admin
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/register"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-md transition-colors"
            >
              Join Free
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900 px-4 py-4 space-y-3 text-sm font-medium">
          <Link href="/directory" className="block text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>
            Find Professionals
          </Link>
          <Link href="/register" className="block text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>
            Join as Professional
          </Link>
          <Link href="/dashboard" className="block text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
          <Link href="/admin" className="block text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>
            Admin
          </Link>
          <Link
            href="/register"
            className="block bg-amber-500 text-slate-900 font-semibold px-4 py-2 rounded-md text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Join Free
          </Link>
        </div>
      )}
    </header>
  );
}
