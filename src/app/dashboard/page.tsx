import Link from "next/link";
import {
  User, MessageSquare, CreditCard, Settings, CheckCircle,
  Eye, Bell, Star, TrendingUp, Clock, AlertCircle, Edit3,
  Crown, ArrowRight, Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const messages = [
  { from: "Thomas B.", time: "2 hours ago", preview: "Hi James, I'm interested in the BMW 5 Series — could we arrange a time to discuss?", read: false },
  { from: "Claire W.", time: "Yesterday", preview: "Thanks for your help last week. Can you confirm the delivery date for next Friday?", read: false },
  { from: "Ahmed K.", time: "3 days ago", preview: "Quick question about the finance options available on the X3...", read: true },
  { from: "Rebecca M.", time: "1 week ago", preview: "Really appreciated your advice. Will definitely be in touch when I'm ready to proceed.", read: true },
];

const stats = [
  { label: "Profile Views", value: "1,284", icon: <Eye size={20} className="text-blue-500" />, change: "+12% this month" },
  { label: "Enquiries Received", value: "47", icon: <MessageSquare size={20} className="text-emerald-500" />, change: "+8 this week" },
  { label: "Rating", value: "4.9★", icon: <Star size={20} className="text-amber-500" />, change: "87 reviews" },
  { label: "Response Rate", value: "98%", icon: <TrendingUp size={20} className="text-violet-500" />, change: "Within 2 hrs avg" },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen">
        {/* Dashboard header */}
        <div className="bg-slate-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JH
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold">James Hartley</h1>
                    <CheckCircle size={16} className="text-emerald-400" />
                  </div>
                  <p className="text-slate-400 text-sm">Sales Executive · Manchester</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full">
                  ● LIVE
                </span>
                <Link
                  href="/profile/1"
                  className="flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
                >
                  <Eye size={14} />
                  View Public Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Subscription banner */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Crown size={22} className="text-slate-900" />
              <div>
                <div className="font-bold text-slate-900">Pro Plan — Active</div>
                <div className="text-slate-800 text-sm">Featured placement + enhanced visibility · Renews 15 May 2025</div>
              </div>
            </div>
            <Link href="#" className="flex items-center gap-1.5 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-slate-800 transition-colors flex-shrink-0">
              Manage Subscription <ArrowRight size={14} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-slate-500 font-medium">{s.label}</div>
                  {s.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{s.value}</div>
                <div className="text-xs text-slate-400">{s.change}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Messages */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <MessageSquare size={16} className="text-amber-500" />
                    Enquiries
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-1.5 py-0.5 rounded-full">2</span>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">View All</button>
                </div>
                <div className="divide-y divide-slate-100">
                  {messages.map((msg, i) => (
                    <div key={i} className={`px-6 py-4 hover:bg-slate-50 cursor-pointer ${!msg.read ? "bg-amber-50/50" : ""}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          {!msg.read && <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />}
                          {msg.read && <div className="w-2 h-2 flex-shrink-0" />}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-slate-900 text-sm">{msg.from}</span>
                              {!msg.read && <span className="text-xs bg-amber-100 text-amber-700 font-bold px-1.5 py-0.5 rounded">NEW</span>}
                            </div>
                            <p className="text-slate-500 text-sm truncate">{msg.preview}</p>
                          </div>
                        </div>
                        <span className="text-xs text-slate-400 flex-shrink-0">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar panels */}
            <div className="space-y-5">
              {/* Verification status */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                  <Shield size={15} className="text-amber-500" />
                  Verification Status
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Identity Check", done: true },
                    { label: "Brand Affiliation", done: true },
                    { label: "Profile Review", done: true },
                    { label: "Live on Directory", done: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <CheckCircle size={14} className={item.done ? "text-emerald-500" : "text-slate-300"} />
                      <span className={item.done ? "text-slate-700" : "text-slate-400"}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    { icon: <Edit3 size={14} />, label: "Edit Profile", href: "#" },
                    { icon: <CreditCard size={14} />, label: "Billing & Subscription", href: "#" },
                    { icon: <Bell size={14} />, label: "Notification Settings", href: "#" },
                    { icon: <Settings size={14} />, label: "Account Settings", href: "#" },
                    { icon: <User size={14} />, label: "Change Password", href: "#" },
                  ].map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-3 py-2 rounded-md transition-colors"
                    >
                      <span className="text-slate-400">{action.icon}</span>
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Alert */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-blue-900 mb-1">Profile Tip</div>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Adding more specialisms and a detailed About section increases your enquiry rate by up to 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile completeness */}
          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900">Profile Completeness</h3>
                <p className="text-slate-500 text-sm">Complete your profile to improve visibility</p>
              </div>
              <div className="text-2xl font-bold text-amber-600">82%</div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: "82%" }} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                { label: "Profile Photo", done: false },
                { label: "About Section", done: true },
                { label: "Specialisms", done: true },
                { label: "LinkedIn URL", done: false },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${item.done ? "bg-emerald-50 text-emerald-700" : "bg-slate-50 text-slate-500"}`}>
                  <CheckCircle size={12} className={item.done ? "text-emerald-500" : "text-slate-300"} />
                  {item.label}
                  {!item.done && <span className="ml-auto text-amber-600 font-medium">Add</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock size={15} className="text-slate-400" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                { action: "New enquiry from Thomas B.", time: "2 hours ago", type: "message" },
                { action: "Profile viewed 14 times today", time: "Today", type: "view" },
                { action: "New review posted — 5 stars", time: "Yesterday", type: "review" },
                { action: "Pro subscription renewed", time: "15 Apr 2025", type: "billing" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    item.type === "message" ? "bg-amber-500" :
                    item.type === "view" ? "bg-blue-400" :
                    item.type === "review" ? "bg-emerald-400" : "bg-slate-300"
                  }`} />
                  <span className="text-slate-700 flex-1">{item.action}</span>
                  <span className="text-slate-400 text-xs flex-shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
