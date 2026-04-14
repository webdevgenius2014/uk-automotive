import Link from "next/link";
import { Search, MapPin, Briefcase, CheckCircle, Star, SlidersHorizontal, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const professionals = [
  { id: "1", name: "James Hartley", role: "Sales Executive", brand: "BMW · Mercedes-Benz", location: "Manchester", rating: 4.9, reviews: 87, verified: true, specialism: "New Car Sales", initials: "JH", color: "bg-blue-600" },
  { id: "2", name: "Sarah Mitchell", role: "Service Advisor", brand: "Audi · Volkswagen", location: "London", rating: 5.0, reviews: 124, verified: true, specialism: "Warranty & Repairs", initials: "SM", color: "bg-emerald-600" },
  { id: "3", name: "Daniel Okafor", role: "Independent Specialist", brand: "Multi-brand", location: "Birmingham", rating: 4.8, reviews: 63, verified: true, specialism: "Diagnostics", initials: "DO", color: "bg-violet-600" },
  { id: "4", name: "Emma Clarke", role: "Sales Executive", brand: "Toyota · Lexus", location: "Leeds", rating: 4.7, reviews: 51, verified: true, specialism: "Fleet Sales", initials: "EC", color: "bg-rose-600" },
  { id: "5", name: "Ravi Patel", role: "Service Advisor", brand: "Ford · Vauxhall", location: "Bristol", rating: 4.9, reviews: 98, verified: true, specialism: "Servicing & MOT", initials: "RP", color: "bg-cyan-600" },
  { id: "6", name: "Laura Thompson", role: "Independent Specialist", brand: "BMW · Porsche", location: "Edinburgh", rating: 4.6, reviews: 39, verified: false, specialism: "Performance Vehicles", initials: "LT", color: "bg-orange-600" },
  { id: "7", name: "Michael Grant", role: "Sales Executive", brand: "Jaguar · Land Rover", location: "Cardiff", rating: 4.8, reviews: 72, verified: true, specialism: "Prestige Sales", initials: "MG", color: "bg-slate-600" },
  { id: "8", name: "Priya Sharma", role: "Service Advisor", brand: "Honda · Mazda", location: "Nottingham", rating: 4.9, reviews: 55, verified: true, specialism: "EV & Hybrid", initials: "PS", color: "bg-teal-600" },
  { id: "9", name: "Chris Donovan", role: "Independent Specialist", brand: "Multi-brand", location: "Liverpool", rating: 4.7, reviews: 44, verified: true, specialism: "Bodywork & Paint", initials: "CD", color: "bg-indigo-600" },
];

const brands = ["All Brands", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Toyota", "Ford", "Jaguar", "Land Rover", "Vauxhall"];
const locations = ["All Locations", "London", "Manchester", "Birmingham", "Leeds", "Bristol", "Edinburgh", "Cardiff", "Liverpool", "Nottingham"];
const roles = ["All Types", "Sales Executive", "Service Advisor", "Independent Specialist"];

export default function DirectoryPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Find Automotive Professionals</h1>
          <p className="text-slate-400">Browse verified advisors, executives, and specialists across the UK.</p>

          {/* Search bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, brand, or specialism..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                readOnly
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-md transition-colors text-sm">
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-slate-200 rounded-xl p-5 sticky top-20">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-5">
                <SlidersHorizontal size={16} className="text-amber-500" />
                Filters
              </div>

              <div className="space-y-6 text-sm">
                {/* Role filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Professional Type
                  </label>
                  <div className="space-y-1.5">
                    {roles.map((r) => (
                      <label key={r} className="flex items-center gap-2 cursor-pointer hover:text-amber-600">
                        <input type="radio" name="role" defaultChecked={r === "All Types"} className="accent-amber-500" />
                        <span className="text-slate-700">{r}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Brand
                  </label>
                  <select className="w-full border border-slate-200 rounded-md px-3 py-2 text-slate-700 focus:outline-none focus:border-amber-500">
                    {brands.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Location filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Location
                  </label>
                  <select className="w-full border border-slate-200 rounded-md px-3 py-2 text-slate-700 focus:outline-none focus:border-amber-500">
                    {locations.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>

                {/* Verified only */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-amber-500" defaultChecked />
                    <span className="text-slate-700">Verified only</span>
                  </label>
                </div>

                <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold py-2 rounded-md transition-colors text-sm">
                  Apply Filters
                </button>
                <button className="w-full text-slate-500 hover:text-slate-700 text-sm">
                  Clear all
                </button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <p className="text-slate-600 text-sm">
                Showing <strong className="text-slate-900">{professionals.length}</strong> professionals
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Filter size={14} />
                Sort by:
                <select className="border border-slate-200 rounded-md px-2 py-1 text-slate-700 focus:outline-none text-sm">
                  <option>Highest Rated</option>
                  <option>Most Reviews</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {professionals.map((pro) => (
                <Link
                  key={pro.id}
                  href={`/profile/${pro.id}`}
                  className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-amber-300 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`${pro.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {pro.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-slate-900 text-sm truncate">{pro.name}</h3>
                        {pro.verified && <CheckCircle size={13} className="text-emerald-500 flex-shrink-0" />}
                      </div>
                      <p className="text-amber-600 text-xs font-medium">{pro.role}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={12} className="text-slate-400" />
                      {pro.brand}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-slate-400" />
                      {pro.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="font-bold text-slate-900 text-xs">{pro.rating}</span>
                      <span className="text-slate-400 text-xs">({pro.reviews})</span>
                    </div>
                    <span className="text-amber-600 text-xs font-semibold group-hover:underline">
                      View →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-2 text-sm">
              <button className="px-4 py-2 border border-slate-200 rounded-md text-slate-500 hover:border-amber-400 hover:text-amber-600 transition-colors">
                Previous
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`w-9 h-9 rounded-md font-medium transition-colors ${
                    p === 1
                      ? "bg-amber-500 text-slate-900"
                      : "border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="px-4 py-2 border border-slate-200 rounded-md text-slate-500 hover:border-amber-400 hover:text-amber-600 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
