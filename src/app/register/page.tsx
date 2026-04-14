import Link from "next/link";
import {
  Shield, CheckCircle, ArrowRight, User, Briefcase, MapPin,
  Crown, Star, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Get started and build your reputation.",
    icon: <User size={22} className="text-slate-600" />,
    color: "border-slate-200",
    headerBg: "bg-slate-50",
    features: [
      "Public directory listing",
      "Contact form for enquiries",
      "Verification badge (on approval)",
      "Up to 3 specialisms",
      "Email notifications",
    ],
    cta: "Create Free Account",
    ctaStyle: "border border-slate-300 hover:border-amber-400 text-slate-700 hover:text-amber-700",
    popular: false,
  },
  {
    name: "Pro",
    price: "£29",
    period: "/month",
    description: "Stand out and grow your client base.",
    icon: <Star size={22} className="text-amber-500" />,
    color: "border-amber-400 shadow-lg shadow-amber-100",
    headerBg: "bg-amber-500",
    features: [
      "Everything in Basic",
      "Featured placement in directory",
      "Priority search ranking",
      "Unlimited specialisms",
      "Profile analytics & insights",
      "Dedicated support",
    ],
    cta: "Start Pro — 14 Days Free",
    ctaStyle: "bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold",
    popular: true,
  },
  {
    name: "Premium",
    price: "£59",
    period: "/month",
    description: "Maximum exposure for elite professionals.",
    icon: <Crown size={22} className="text-violet-600" />,
    color: "border-slate-200",
    headerBg: "bg-slate-900",
    features: [
      "Everything in Pro",
      "Live chat with consumers",
      "Top-of-page spotlight listing",
      "Social media promotion",
      "Monthly performance report",
      "Dedicated account manager",
    ],
    cta: "Go Premium",
    ctaStyle: "bg-slate-900 hover:bg-slate-700 text-white font-bold",
    popular: false,
  },
];

const steps = [
  { num: "01", title: "Create Account", desc: "Fill in your basic details and choose your plan." },
  { num: "02", title: "Build Your Profile", desc: "Add your experience, specialisms, and brand affiliations." },
  { num: "03", title: "Admin Review", desc: "Our team verifies your profile — usually within 24 hours." },
  { num: "04", title: "Go Live", desc: "Your profile appears in the directory and enquiries begin." },
];

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <Shield size={14} />
            UK&apos;s Most Trusted Automotive Network
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Join as an{" "}
            <span className="text-amber-400">Automotive</span>{" "}
            Professional
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Create your verified profile and start connecting with consumers who are actively
            searching for your expertise across the UK.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">How to Get Listed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-slate-900 font-bold text-lg mb-3">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-amber-200" />
                )}
                <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Choose Your Plan</h2>
            <p className="text-slate-500 text-lg">Start free. Upgrade when you&apos;re ready.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} rounded-2xl overflow-hidden relative`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className={`${plan.headerBg} px-6 py-6`}>
                  <div className="mb-3">{plan.icon}</div>
                  <div className={`text-sm font-bold uppercase tracking-wider mb-1 ${plan.popular ? "text-slate-900" : "text-slate-500"}`}>
                    {plan.name}
                  </div>
                  <div className={`text-4xl font-bold ${plan.popular ? "text-slate-900" : "text-slate-900"}`}>
                    {plan.price}
                    <span className="text-base font-normal text-slate-500">{plan.period}</span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.popular ? "text-slate-700" : "text-slate-500"}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="px-6 py-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-md text-sm transition-colors ${plan.ctaStyle} flex items-center justify-center gap-2`}>
                    {plan.cta}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            No long-term contracts. Cancel anytime. All plans include GDPR-compliant messaging.
          </p>
        </div>
      </section>

      {/* Registration form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={20} className="text-amber-500" />
              <h2 className="text-2xl font-bold text-slate-900">Create Your Account</h2>
            </div>
            <p className="text-slate-500 text-sm mb-8">Start with a free listing — upgrade later.</p>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name *</label>
                  <input type="text" placeholder="James" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name *</label>
                  <input type="text" placeholder="Hartley" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                <input type="email" placeholder="you@email.com" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Password *</label>
                <input type="password" placeholder="Minimum 8 characters" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Professional Type *</label>
                <div className="relative">
                  <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select className="w-full pl-9 border border-slate-200 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-amber-500 appearance-none">
                    <option value="">Select your role...</option>
                    <option>Sales Executive</option>
                    <option>Service Advisor</option>
                    <option>Independent Specialist</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Primary Location *</label>
                <div className="relative">
                  <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="e.g. Manchester, Greater Manchester" className="w-full pl-9 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Brands You Represent</label>
                <input type="text" placeholder="e.g. BMW, Mercedes-Benz, Audi" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
              </div>

              <div className="flex items-start gap-2.5">
                <input type="checkbox" id="terms" className="mt-0.5 accent-amber-500" />
                <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-amber-600 underline">Terms of Service</Link>,{" "}
                  <Link href="#" className="text-amber-600 underline">Privacy Policy</Link>, and{" "}
                  <Link href="#" className="text-amber-600 underline">Code of Conduct</Link>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3.5 rounded-md transition-colors"
              >
                <Shield size={16} />
                Create Free Account
                <ArrowRight size={16} />
              </button>
            </form>

            <p className="text-center text-slate-400 text-xs mt-6">
              Already have an account?{" "}
              <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          {[
            { icon: <Shield size={16} className="text-emerald-500" />, label: "Secure & GDPR Compliant" },
            { icon: <CheckCircle size={16} className="text-emerald-500" />, label: "Manual Verification Process" },
            { icon: <Star size={16} className="text-amber-400" />, label: "2,400+ Verified Professionals" },
            { icon: <Crown size={16} className="text-violet-500" />, label: "No Long-term Contracts" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
