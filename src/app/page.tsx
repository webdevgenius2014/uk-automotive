import Link from "next/link";
import { Shield, Star, CheckCircle, Search, Users, Award, ArrowRight, MapPin, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredProfessionals = [
  {
    id: "1",
    name: "James Hartley",
    role: "Sales Executive",
    brand: "BMW · Mercedes-Benz",
    location: "Manchester",
    rating: 4.9,
    reviews: 87,
    verified: true,
    initials: "JH",
    color: "bg-blue-600",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "Service Advisor",
    brand: "Audi · Volkswagen",
    location: "London",
    rating: 5.0,
    reviews: 124,
    verified: true,
    initials: "SM",
    color: "bg-emerald-600",
  },
  {
    id: "3",
    name: "Daniel Okafor",
    role: "Independent Specialist",
    brand: "Multi-brand",
    location: "Birmingham",
    rating: 4.8,
    reviews: 63,
    verified: true,
    initials: "DO",
    color: "bg-violet-600",
  },
];

const stats = [
  { label: "Verified Professionals", value: "2,400+" },
  { label: "UK Locations", value: "180+" },
  { label: "Consumer Enquiries", value: "18,000+" },
  { label: "Average Rating", value: "4.9★" },
];

const howItWorks = [
  {
    icon: <Search size={24} className="text-amber-500" />,
    title: "Search",
    desc: "Filter by brand, location, or specialism to find the right professional for you.",
  },
  {
    icon: <Shield size={24} className="text-amber-500" />,
    title: "Verify",
    desc: "Every profile is reviewed and approved by our admin team before going live.",
  },
  {
    icon: <Users size={24} className="text-amber-500" />,
    title: "Connect",
    desc: "Send a direct enquiry to your chosen professional — no middlemen.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <Shield size={14} />
              UK&apos;s Most Trusted Automotive Directory
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Verified{" "}
              <span className="text-amber-400">Automotive</span>{" "}
              Professionals You Can Trust
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Connect with approved Sales Executives, Service Advisors, and Independent Specialists
              across the UK. Every profile verified. Every interaction secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/directory"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-md transition-colors text-base"
              >
                <Search size={18} />
                Search Professionals
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-white px-8 py-3.5 rounded-md transition-colors text-base font-medium"
              >
                Join as a Professional
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-amber-500 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="text-sm font-medium mt-1 text-slate-700">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How It Works</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Three simple steps to connect with the right automotive professional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 mb-5">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Step {i + 1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Professionals</h2>
              <p className="text-slate-500">Hand-picked, top-rated advisors in our network.</p>
            </div>
            <Link
              href="/directory"
              className="flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold text-sm"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProfessionals.map((pro) => (
              <Link
                key={pro.id}
                href={`/profile/${pro.id}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${pro.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {pro.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 truncate">{pro.name}</h3>
                      {pro.verified && (
                        <CheckCircle size={15} className="text-emerald-500 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-amber-600 font-medium">{pro.role}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-500 mb-5">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-slate-400" />
                    {pro.brand}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-slate-400" />
                    {pro.location}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="font-bold text-slate-900 text-sm">{pro.rating}</span>
                    <span className="text-slate-400 text-xs">({pro.reviews} reviews)</span>
                  </div>
                  <span className="text-amber-600 text-sm font-semibold group-hover:underline">
                    View Profile
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                A Platform Built on Trust &amp; Verification
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Every professional on AutoAdvisor UK goes through a rigorous admin review process
                before their profile appears publicly. We verify credentials, specialisms, and brand
                affiliations — so you never have to guess.
              </p>
              <ul className="space-y-4">
                {[
                  "Manual admin approval for every profile",
                  "Verified badge only for confirmed professionals",
                  "GDPR-compliant secure messaging",
                  "Profiles can be suspended if standards drop",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield size={28} className="text-amber-500" />, label: "Admin Verified", desc: "All profiles manually approved" },
                { icon: <Award size={28} className="text-amber-500" />, label: "Credentialled", desc: "Brand affiliations confirmed" },
                { icon: <CheckCircle size={28} className="text-amber-500" />, label: "GDPR Compliant", desc: "Data handled lawfully" },
                { icon: <Users size={28} className="text-amber-500" />, label: "Community Rated", desc: "Real consumer reviews" },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <div className="mb-3">{card.icon}</div>
                  <div className="font-bold text-slate-900 text-sm">{card.label}</div>
                  <div className="text-slate-500 text-xs mt-1">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Join the UK&apos;s Premier Automotive Network?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Create your free profile today and start connecting with consumers who are actively
            looking for your expertise.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-md transition-colors text-base"
          >
            Get Started — It&apos;s Free
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
