import Link from "next/link";
import {
  CheckCircle, MapPin, Briefcase, Star, ArrowLeft,
  MessageSquare, Share2, Flag, Award, Clock, Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const profiles: Record<string, {
  id: string; name: string; role: string; brand: string[]; location: string;
  rating: number; reviews: number; verified: boolean; specialism: string[];
  initials: string; color: string; about: string; experience: string;
  responseTime: string; joinedYear: string;
}> = {
  "1": {
    id: "1", name: "James Hartley", role: "Sales Executive",
    brand: ["BMW", "Mercedes-Benz"], location: "Manchester, Greater Manchester",
    rating: 4.9, reviews: 87, verified: true,
    specialism: ["New Car Sales", "Finance & PCP", "Premium Vehicles", "Fleet Sales"],
    initials: "JH", color: "bg-blue-600",
    about: "With over 12 years in premium automotive retail, I specialise in helping customers find the perfect vehicle to match their lifestyle and budget. My approach is consultative — I take the time to truly understand what you need, not just what's on the forecourt.",
    experience: "12 years", responseTime: "Within 2 hours", joinedYear: "2021",
  },
  "2": {
    id: "2", name: "Sarah Mitchell", role: "Service Advisor",
    brand: ["Audi", "Volkswagen"], location: "London, Greater London",
    rating: 5.0, reviews: 124, verified: true,
    specialism: ["Warranty & Repairs", "Scheduled Servicing", "Technical Queries", "Customer Liaison"],
    initials: "SM", color: "bg-emerald-600",
    about: "I bridge the gap between customers and workshop teams, ensuring clear communication and transparent pricing. My goal is that every customer leaves fully informed and satisfied, from initial booking to vehicle collection.",
    experience: "8 years", responseTime: "Within 1 hour", joinedYear: "2020",
  },
  "3": {
    id: "3", name: "Daniel Okafor", role: "Independent Specialist",
    brand: ["Multi-brand"], location: "Birmingham, West Midlands",
    rating: 4.8, reviews: 63, verified: true,
    specialism: ["Advanced Diagnostics", "Pre-purchase Inspections", "Classic Car Restoration", "Independent Advice"],
    initials: "DO", color: "bg-violet-600",
    about: "As an independent specialist, I offer unbiased, manufacturer-agnostic advice and technical services. Whether you're buying used, need a thorough inspection, or have an intermittent fault no dealer can trace — I can help.",
    experience: "15 years", responseTime: "Same day", joinedYear: "2022",
  },
};

const reviews = [
  { name: "Thomas B.", rating: 5, date: "March 2025", comment: "Absolutely brilliant. Made the whole process stress-free and got me a fantastic deal. Highly recommend!" },
  { name: "Claire W.", rating: 5, date: "February 2025", comment: "Incredibly knowledgeable and patient. Never felt pressured. Will be going back for my next car without a doubt." },
  { name: "Ahmed K.", rating: 4, date: "January 2025", comment: "Great service, kept me updated throughout. Slight delay on delivery but communicated well." },
];

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pro = profiles[id] ?? profiles["1"];

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back */}
        <Link href="/directory" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6">
          <ArrowLeft size={16} />
          Back to Directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Profile card */}
          <aside className="lg:col-span-1 space-y-5">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              {/* Colour strip */}
              <div className={`${pro.color} h-20`} />
              <div className="px-6 pb-6 -mt-10">
                <div className={`${pro.color} w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-white mb-4`}>
                  {pro.initials}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold text-slate-900">{pro.name}</h1>
                  {pro.verified && <CheckCircle size={18} className="text-emerald-500" />}
                </div>
                <p className="text-amber-600 font-semibold text-sm mb-3">{pro.role}</p>

                <div className="space-y-2 text-sm text-slate-500 mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-slate-400" />
                    {pro.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-slate-400" />
                    {pro.brand.join(" · ")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-slate-400" />
                    Responds {pro.responseTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-slate-400" />
                    {pro.experience} experience
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5 bg-amber-50 rounded-lg px-3 py-2">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-slate-900">{pro.rating}</span>
                  <span className="text-slate-500 text-sm">({pro.reviews} reviews)</span>
                </div>

                <Link
                  href="#message"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-md transition-colors text-sm"
                >
                  <MessageSquare size={16} />
                  Message This Advisor
                </Link>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">Trust Badges</h3>
              <div className="space-y-3">
                {[
                  { icon: <CheckCircle size={16} className="text-emerald-500" />, label: "Identity Verified" },
                  { icon: <Award size={16} className="text-amber-500" />, label: "Admin Approved" },
                  { icon: <Star size={16} className="text-amber-400" />, label: "Top Rated Professional" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-slate-700">
                    {badge.icon}
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 border border-slate-200 rounded-md px-3 py-2 flex-1 justify-center">
                <Share2 size={14} />
                Share
              </button>
              <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-600 border border-slate-200 rounded-md px-3 py-2 flex-1 justify-center">
                <Flag size={14} />
                Report
              </button>
            </div>
          </aside>

          {/* Right: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3">About</h2>
              <p className="text-slate-600 leading-relaxed">{pro.about}</p>
            </div>

            {/* Specialisms */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Specialisms</h2>
              <div className="flex flex-wrap gap-2">
                {pro.specialism.map((s) => (
                  <span key={s} className="bg-amber-50 text-amber-700 border border-amber-200 text-sm font-medium px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Brands Represented</h2>
              <div className="flex flex-wrap gap-3">
                {pro.brand.map((b) => (
                  <span key={b} className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900">Consumer Reviews</h2>
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-slate-900">{pro.rating}</span>
                  <span className="text-slate-500 text-sm">/ 5.0</span>
                </div>
              </div>
              <div className="space-y-5">
                {reviews.map((r, i) => (
                  <div key={i} className="border-b border-slate-100 last:border-0 pb-5 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-slate-900 text-sm">{r.name}</span>
                        <span className="text-slate-400 text-xs ml-2">{r.date}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} size={12} className={j < r.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"} />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Message form */}
            <div id="message" className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Send an Enquiry</h2>
              <p className="text-slate-500 text-sm mb-5">
                Your message will be sent securely. You do not need an account to contact this advisor.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name *</label>
                    <input type="text" placeholder="Your name" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address *</label>
                    <input type="email" placeholder="you@email.com" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Phone (optional)</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="tel" placeholder="+44..." className="w-full pl-9 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Message *</label>
                  <textarea rows={4} placeholder="Tell the advisor what you're looking for..." className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 resize-none" />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="gdpr" className="mt-0.5 accent-amber-500" />
                  <label htmlFor="gdpr" className="text-xs text-slate-500 leading-relaxed">
                    I consent to my data being stored securely for the purpose of this enquiry. I have read and agree to the{" "}
                    <Link href="#" className="text-amber-600 underline">Privacy Policy</Link>.
                  </label>
                </div>
                <button type="submit" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-md transition-colors text-sm">
                  <MessageSquare size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
