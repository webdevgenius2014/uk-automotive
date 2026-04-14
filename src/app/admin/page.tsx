import Link from "next/link";
import {
  Users, MessageSquare, CheckCircle, XCircle, AlertCircle,
  Star, TrendingUp, Eye, Shield, Crown, Clock, Search, Filter,
  MoreVertical, Ban
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pendingProfiles = [
  { id: "10", name: "Oliver Nash", role: "Sales Executive", brand: "Porsche · Bentley", location: "Surrey", submitted: "12 Apr 2025", initials: "ON", color: "bg-slate-500" },
  { id: "11", name: "Fatima Khalid", role: "Service Advisor", brand: "Renault · Nissan", location: "Bradford", submitted: "11 Apr 2025", initials: "FK", color: "bg-rose-500" },
  { id: "12", name: "Marcus Webb", role: "Independent Specialist", brand: "Multi-brand", location: "Glasgow", submitted: "10 Apr 2025", initials: "MW", color: "bg-teal-500" },
];

const liveProfiles = [
  { id: "1", name: "James Hartley", role: "Sales Executive", location: "Manchester", rating: 4.9, views: 1284, plan: "Pro", status: "Live", initials: "JH", color: "bg-blue-600" },
  { id: "2", name: "Sarah Mitchell", role: "Service Advisor", location: "London", rating: 5.0, views: 2041, plan: "Pro", status: "Live", initials: "SM", color: "bg-emerald-600" },
  { id: "3", name: "Daniel Okafor", role: "Independent Specialist", location: "Birmingham", rating: 4.8, views: 832, plan: "Basic", status: "Live", initials: "DO", color: "bg-violet-600" },
  { id: "6", name: "Laura Thompson", role: "Independent Specialist", location: "Edinburgh", rating: 4.6, views: 412, plan: "Basic", status: "Suspended", initials: "LT", color: "bg-orange-600" },
];

const recentMessages = [
  { from: "Thomas B.", to: "James Hartley", time: "2 hrs ago", preview: "Hi James, I'm interested in the BMW 5 Series..." },
  { from: "Claire W.", to: "Sarah Mitchell", time: "5 hrs ago", preview: "Can you confirm the delivery date for next Friday?" },
  { from: "Ahmed K.", to: "James Hartley", time: "Yesterday", preview: "Quick question about finance options on the X3..." },
];

const stats = [
  { label: "Total Professionals", value: "2,418", icon: <Users size={20} className="text-blue-500" />, bg: "bg-blue-50" },
  { label: "Pending Approval", value: "14", icon: <AlertCircle size={20} className="text-amber-500" />, bg: "bg-amber-50" },
  { label: "Messages This Week", value: "342", icon: <MessageSquare size={20} className="text-emerald-500" />, bg: "bg-emerald-50" },
  { label: "Pro Subscribers", value: "867", icon: <Crown size={20} className="text-violet-500" />, bg: "bg-violet-50" },
];

export default function AdminPage() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen">
        {/* Admin header */}
        <div className="bg-slate-900 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500 rounded-md p-2">
                  <Shield size={18} className="text-slate-900" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Admin Dashboard</h1>
                  <p className="text-slate-400 text-sm">AutoAdvisor UK — Platform Management</p>
                </div>
              </div>
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold px-3 py-1 rounded-full">
                ADMIN ACCESS
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${s.bg} mb-3`}>
                  {s.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                <div className="text-slate-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Pending approvals */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-amber-50">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <AlertCircle size={16} className="text-amber-500" />
                  Pending Profile Approvals
                  <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full">14</span>
                </div>
                <Link href="#" className="text-amber-600 hover:text-amber-700 text-sm font-medium">View All</Link>
              </div>
              <div className="divide-y divide-slate-100">
                {pendingProfiles.map((pro) => (
                  <div key={pro.id} className="px-6 py-4 flex items-center gap-4">
                    <div className={`${pro.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {pro.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900 text-sm">{pro.name}</span>
                        <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{pro.role}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{pro.brand} · {pro.location} · Submitted {pro.submitted}</div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Link href={`/profile/${pro.id}`}>
                        <button className="flex items-center gap-1.5 text-xs border border-slate-200 hover:border-slate-300 text-slate-600 px-3 py-1.5 rounded-md transition-colors">
                          <Eye size={12} />
                          Review
                        </button>
                      </Link>
                      <button className="flex items-center gap-1.5 text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md transition-colors">
                        <CheckCircle size={12} />
                        Approve
                      </button>
                      <button className="flex items-center gap-1.5 text-xs bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1.5 rounded-md transition-colors">
                        <XCircle size={12} />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats panel */}
            <div className="space-y-5">
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                  <TrendingUp size={15} className="text-amber-500" />
                  Platform Overview
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Live Profiles", value: "2,404", color: "text-emerald-600" },
                    { label: "Suspended", value: "14", color: "text-red-500" },
                    { label: "Basic (Free)", value: "1,551", color: "text-slate-600" },
                    { label: "Pro Plan", value: "867", color: "text-amber-600" },
                    { label: "Total Messages", value: "18,243", color: "text-blue-600" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-slate-500">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                  <Clock size={15} className="text-slate-400" />
                  Recent Actions
                </h3>
                <div className="space-y-3">
                  {[
                    { action: "Approved: Ravi Patel", time: "1 hr ago" },
                    { action: "Suspended: Laura Thompson", time: "3 hrs ago" },
                    { action: "Badge added: Sarah Mitchell", time: "Yesterday" },
                    { action: "Featured: James Hartley", time: "2 days ago" },
                  ].map((item, i) => (
                    <div key={i} className="text-xs text-slate-600">
                      <div className="font-medium">{item.action}</div>
                      <div className="text-slate-400">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Live profiles table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-slate-100 gap-3">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <Users size={16} className="text-slate-400" />
                All Professionals
              </h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-amber-500 w-40"
                    readOnly
                  />
                </div>
                <button className="flex items-center gap-1.5 text-xs border border-slate-200 text-slate-600 px-3 py-1.5 rounded-md hover:border-slate-300">
                  <Filter size={12} />
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Professional</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Rating</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Views</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Plan</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {liveProfiles.map((pro) => (
                    <tr key={pro.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`${pro.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                            {pro.initials}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{pro.name}</div>
                            <div className="text-xs text-slate-400">{pro.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600 text-xs">{pro.role}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-amber-400 fill-amber-400" />
                          <span className="font-medium text-slate-900">{pro.rating}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600 text-xs">{pro.views.toLocaleString()}</td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          pro.plan === "Pro" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"
                        }`}>
                          {pro.plan}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          pro.status === "Live" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"
                        }`}>
                          {pro.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1">
                          <Link href={`/profile/${pro.id}`}>
                            <button className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded transition-colors">
                              <Eye size={14} />
                            </button>
                          </Link>
                          <button className="p-1.5 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded transition-colors">
                            <Star size={14} />
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                            <Ban size={14} />
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded transition-colors">
                            <MoreVertical size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Messages audit */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare size={16} className="text-slate-400" />
                Message Audit Log
              </h2>
              <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">View All</button>
            </div>
            <div className="divide-y divide-slate-100">
              {recentMessages.map((msg, i) => (
                <div key={i} className="px-6 py-4 text-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                  <div className="flex-1">
                    <span className="font-semibold text-slate-900">{msg.from}</span>
                    <span className="text-slate-400 mx-2">→</span>
                    <span className="text-slate-700">{msg.to}</span>
                    <p className="text-slate-400 text-xs mt-0.5 truncate max-w-md">{msg.preview}</p>
                  </div>
                  <div className="flex items-center gap-3 sm:ml-4">
                    <span className="text-xs text-slate-400">{msg.time}</span>
                    <button className="text-xs text-red-500 hover:text-red-700 border border-red-200 hover:border-red-300 px-2 py-1 rounded">
                      Flag
                    </button>
                  </div>
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
