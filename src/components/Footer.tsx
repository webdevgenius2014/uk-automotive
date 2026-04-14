import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-amber-500 rounded-md p-1.5">
                <Shield size={16} className="text-slate-900" />
              </div>
              <span className="font-bold text-white text-lg">
                AutoAdvisor<span className="text-amber-400"> UK</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              The UK&apos;s trusted directory for verified automotive professionals. Connecting consumers with
              qualified Sales Executives, Service Advisors, and Independent Specialists.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/directory" className="hover:text-white transition-colors">Find Professionals</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Join as Professional</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Advisor Dashboard</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Code of Conduct</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} AutoAdvisor UK. All rights reserved.</p>
          <p>Registered in England &amp; Wales &middot; ICO Registered &middot; GDPR Compliant</p>
        </div>
      </div>
    </footer>
  );
}
