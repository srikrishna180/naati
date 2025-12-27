// app/routes/_index.tsx
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function NaatiTeacherHome() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-10% 0px -20% 0px" }
        );

        document.querySelectorAll("section").forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-amber-50">
            {/* Navigation */}
            <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 sm:px-6 sm:py-3 shadow-md max-w-md sm:max-w-2xl w-[95%] transition-all duration-500">
                <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                    {["home", "services", "about", "testimonials", "contact"].map(section => (
                        <li key={section}>
                            <button
                                type="button"
                                className={`transition-colors duration-300 px-2.5 sm:px-3 py-1.5 rounded-xl ${
                                    activeSection === section
                                        ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow"
                                        : "text-gray-700 hover:text-amber-600"
                                }`}
                                onClick={() => {
                                    document
                                        .getElementById(section)
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hero */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16"
            >
                <div className="text-center max-w-4xl mx-auto animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                        NAATI Certified
                        <br />
                        <span className="text-4xl sm:text-5xl md:text-7xl">
              Hindi &amp; Telugu
            </span>
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                        Ace your CCL exam with expert guidance. 100%+ pass rate. Personalized
                        coaching for migration points.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <button
                            type="button"
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300"
                        >
                            Speak With Your NAATI Coach
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                document
                                    .getElementById("services")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="w-full sm:w-auto border-2 border-amber-400 text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold hover:bg-amber-50 transition-all duration-300"
                        >
                            View Packages
                        </button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section
                id="services"
                className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-white to-amber-50/30"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                            Training Packages
                        </h2>
                        <p className="text-sm md:text-base text-slate-500">
                            Flexible options for every schedule and budget
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                        {[
                            {
                                title: "Starter (5 weeks)",
                                price: "$299",
                                desc: "10 mock tests + vocabulary",
                                sessions: 10,
                            },
                            {
                                title: "Pro (8 weeks)",
                                price: "$499",
                                desc: "20 mocks + live feedback",
                                sessions: 20,
                                featured: true,
                            },
                            {
                                title: "Premium (12 weeks)",
                                price: "$699",
                                desc: "Unlimited + guaranteed pass",
                                sessions: 40,
                            },
                        ].map(pkg => (
                            <div
                                key={pkg.title}
                                className={[
                                    "relative flex flex-col rounded-[24px] sm:rounded-[28px] border bg-white px-6 sm:px-8 py-7 sm:py-9",
                                    "border-slate-100 transition-transform duration-200",
                                    pkg.featured
                                        ? "border-amber-200 bg-amber-50/40 md:-translate-y-1"
                                        : "md:hover:-translate-y-1",
                                ].join(" ")}
                            >
                                {pkg.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 sm:px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-5 sm:mb-6">
                                    <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5">
                                        {pkg.title}
                                    </h3>
                                    <div className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#FFA51F]">
                                        {pkg.price}
                                    </div>
                                </div>

                                <ul className="space-y-2.5 sm:space-y-3 text-sm md:text-[15px] text-slate-600">
                                    <li className="flex items-center gap-2.5 sm:gap-3">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFA51F]" />
                                        {pkg.desc}
                                    </li>
                                    <li className="flex items-center gap-2.5 sm:gap-3">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFA51F]" />
                                        {pkg.sessions} practice sessions
                                    </li>
                                    <li className="flex items-center gap-2.5 sm:gap-3">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFA51F]" />
                                        Lifetime vocabulary access
                                    </li>
                                </ul>

                                <p className="mt-5 sm:mt-6 text-[11px] sm:text-xs md:text-[13px] text-slate-400">
                                    Exact schedule and batch will be confirmed over a quick phone call.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-r from-slate-50 via-white to-amber-50/60"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-3">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              About your NAATI coach
            </span>
                    </div>

                    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                        Why Choose Me?
                    </h2>
                    <p className="text-center text-sm sm:text-base md:text-lg text-slate-500 mb-12 sm:mb-16 max-w-2xl mx-auto px-2">
                        Dedicated NAATI CCL coaching in Hindi and Telugu with a calm, structured
                        approach that fits your work and family schedule.
                    </p>

                    <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1.1fr,1fr] items-start">
                        {/* Left: Image card */}
                        <div className="relative max-w-xl mx-auto w-full">
                            <div className="relative overflow-hidden rounded-3xl bg-slate-900/5">
                                <img
                                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80"
                                    alt="Student preparing for NAATI CCL exam"
                                    className="w-full h-64 sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 ease-out hover:scale-105"
                                />
                            </div>

                            {/* Floating stat card */}
                            <div className="absolute -bottom-10 left-4 sm:left-6 md:left-10 flex flex-wrap items-center gap-4 rounded-2xl bg-white/90 backdrop-blur px-4 sm:px-5 py-3 sm:py-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                                <div className="flex flex-col min-w-[120px]">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Students coached
                  </span>
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                    500+
                  </span>
                                </div>
                                <div className="hidden sm:block h-10 w-px bg-slate-200" />
                                <div className="flex flex-col min-w-[120px]">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Overall pass rate
                  </span>
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500">
                    100%
                  </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="space-y-8 lg:pl-6">
                            <div>
                                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-amber-500 mb-2">
                                    10+ years experience
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900">
                                    NAATI‑accredited Hindi &amp; Telugu specialist
                                </h3>
                                <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                                    Teaching NAATI CCL since 2014 with a strong focus on real exam
                                    dialogues, Australian context, and confident speaking. Every
                                    session is tailored to your current level and migration goals.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Structured mock tests",
                                        desc: "Weekly Hindi & Telugu role‑plays with scoring similar to the official test.",
                                    },
                                    {
                                        title: "Vocabulary shortcuts",
                                        desc: "Topic‑wise glossaries and flashcards specifically for CCL immigration scenarios.",
                                    },
                                    {
                                        title: "Flexible timings",
                                        desc: "Evening and weekend batches to fit around work and family commitments.",
                                    },
                                    {
                                        title: "Australian focus",
                                        desc: "Examples tuned to healthcare, education, and community services in Australia.",
                                    },
                                ].map(item => (
                                    <div
                                        key={item.title}
                                        className="flex gap-3 rounded-2xl bg-white/70 px-3 sm:px-4 py-3 sm:py-4 border border-slate-100"
                                    >
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm font-semibold text-slate-900">
                                                {item.title}
                                            </div>
                                            <div className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">
                  ✅ Online &amp; in‑person options
                </span>
                                <span>Sessions available in both Hindi and Telugu CCL streams.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section
                id="testimonials"
                className="py-24 sm:py-32 px-4 sm:px-6 bg-white"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-14 sm:mb-24">
                        Student Success
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                name: "Priya S.",
                                lang: "Hindi",
                                quote: "Passed first attempt! Clear explanations.",
                                rating: 5,
                            },
                            {
                                name: "Ravi K.",
                                lang: "Telugu",
                                quote: "20 mocks made me confident. Thank you!",
                                rating: 5,
                            },
                            {
                                name: "Anita M.",
                                lang: "Hindi",
                                quote: "Flexible timing worked perfectly.",
                                rating: 5,
                            },
                        ].map(testimonial => (
                            <div
                                key={testimonial.name}
                                className="p-6 sm:p-8 rounded-3xl bg-amber-50/50 border transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="flex mb-3 sm:mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-amber-400 text-lg sm:text-xl">
                      ★
                    </span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-amber-600 text-xs sm:text-sm font-medium">
                                        {testimonial.lang} CCL
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-orange-50"
            >
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                        Ready to Start?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 px-2">
                        Call now to book your free 30‑minute NAATI CCL session and plan your
                        migration points.
                    </p>

                    <div className="max-w-md mx-auto rounded-3xl bg-white/80 border border-amber-100 px-4 sm:px-6 py-6 sm:py-7 shadow-sm">
                        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 mb-2">
                            Direct contact
                        </p>

                        <div className="flex flex-col gap-3 sm:gap-4">
                            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-base sm:text-lg">
                  📞
                </span>
                                <span className="text-xl sm:text-2xl font-semibold text-slate-900 select-all">
                  +61&nbsp;4XX&nbsp;XXX&nbsp;XXX
                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-4">
                                <a
                                    href="tel:+614XXXXXXXX"
                                    className="flex-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 sm:px-5 py-3 text-sm md:text-base font-semibold text-white transition-transform duration-150 hover:scale-[1.02]"
                                >
                                    Call to Get Started
                                </a>

                                <button
                                    type="button"
                                    onClick={async () => {
                                        try {
                                            await navigator.clipboard.writeText("+61 4XX XXX XXX");
                                            alert("Phone number copied!");
                                        } catch {
                                            alert("Unable to copy number. Please copy manually.");
                                        }
                                    }}
                                    className="sm:w-36 inline-flex items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700 hover:bg-amber-100 transition-colors"
                                >
                                    Copy number
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-amber-100 text-[11px] sm:text-xs md:text-sm text-slate-500 space-y-1">
                        <p>📅 Available Mon–Sat, 9AM–8PM AEST (Brisbane time)</p>
                        <p>💬 WhatsApp / Voice / Google Meet classes in Hindi &amp; Telugu</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
