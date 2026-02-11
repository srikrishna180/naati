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
                className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-amber-50/40"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Training Packages
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                            Flexible options for every schedule and budget
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                title: "Pro",
                                duration: "8 weeks",
                                price: "23,000",
                                desc: "2 mocks + live feedback",
                                sessions: 20,
                                featured: true,
                            },
                            {
                                title: "Premium",
                                duration: "12 weeks",
                                price: "25,000",
                                desc: "Unlimited + guaranteed pass",
                                sessions: 36,
                            },
                        ].map(pkg => (
                            <div
                                key={pkg.title}
                                className={[
                                    "relative group flex flex-col rounded-2xl border-2 bg-white p-8 sm:p-10",
                                    "shadow-sm hover:shadow-xl transition-all duration-300",
                                    pkg.featured
                                        ? "border-amber-400/50 shadow-amber-100 md:scale-105"
                                        : "border-slate-200 hover:border-amber-300/50",
                                ].join(" ")}
                            >
                                {pkg.featured && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                            {pkg.title}
                                        </h3>
                                        <span className="text-sm text-slate-500 font-medium">
                                ({pkg.duration})
                            </span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-semibold text-slate-600">INR</span>
                                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                {pkg.price}
                            </span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-6 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-base text-slate-700 leading-relaxed">{pkg.desc}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-base text-slate-700 leading-relaxed">{pkg.sessions} practice sessions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-base text-slate-700 leading-relaxed">Lifetime vocabulary access</span>
                                    </li>
                                </ul>

                                <div className="pt-6 border-t border-slate-100">
                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                        Exact schedule and batch will be confirmed over a quick phone call.
                                    </p>
                                </div>
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
                    3000+
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
                                    11+ years experience in Hindi NAATI
                                </div>
                                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-amber-500 mb-2">
                                    5.5 years experience in Telugu NAATI
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
                                        desc: "Fortnightly Hindi & Telugu competitions.",
                                    },
                                    {
                                        title: "Vocabulary shortcuts",
                                        desc: "",
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

                    {/* About Me Section */}
                    <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
                        <div className="rounded-3xl bg-white/80 backdrop-blur border border-slate-200 p-6 sm:p-10 shadow-sm">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                                About Me
                            </h3>
                            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                <p>
                                    I am a dedicated NAATI Telugu and Hindi Tutor with extensive experience in training students for the NAATI - Credentialed Community Language (NAATI-CCL) certification test. I have been actively working in this field since 2018, helping aspiring interpreters achieve their professional goals.
                                </p>
                                <p>
                                    Over the years, my students have maintained a 100% pass rate, which reflects my structured teaching approach, exam-focused strategies, and deep understanding of NAATI standards. I place strong emphasis on real exam scenarios, role-plays, vocabulary development, and practical interpreting techniques.
                                </p>
                                <p>
                                    I am passionate about teaching and continuously develop new lessons and updated study materials to align with the latest NAATI exam patterns. My goal is not only to help students pass the exam but also to build their confidence and professional competence as interpreters.
                                </p>
                                <p className="font-semibold text-amber-600">
                                    If you are looking for focused, result-oriented, and up-to-date NAATI Telugu/Hindi training, you are in the right place.
                                </p>
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
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-14 sm:mb-20">
                        Student Success
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                name: "Marri Charan",
                                lang: "Telugu",
                                date: "Exam date: 28/10/25",
                                quote: "I am incredibly grateful that I joined Aone's NAATI classes and had the opportunity to learn from Swarna madam. From the very beginning, Swarna madam was extremely supportive, guiding me at every step. Her teaching methods are exceptional, which greatly improved my vocabulary and speaking skills. I made sure to attend all of her classes, and the consistent practice, along with her extra mock tests and dedicated revision sessions, helped me build my confidence. Before joining, I was very nervous about the NAATI exam, unsure of how to prepare etc. However, Swarna madam's structured approach, patience, and personalized feedback ensured that I was fully prepared. I highly recommend Swarna madam to anyone looking to excel in NAATI Telugu—her expertise, dedication, and passion for teaching make her the perfect choice.",
                                rating: 5,
                            },
                            {
                                name: "Anonymous Student",
                                lang: "NAATI",
                                date: "",
                                quote: "Hello Madam, I hope you're doing well. I wanted to share the good news that I've successfully passed my NAATI exam! I sincerely thank you for your constant guidance, motivation, and the effort you put into every class. Your teaching methods, vocabulary sessions, and personal attention made a huge impact on my preparation. I truly appreciate all your support in helping me achieve this milestone.",
                                rating: 5,
                            },
                            {
                                name: "Student",
                                lang: "Telugu/Hindi",
                                date: "",
                                quote: "I'm glad I joined NAATI classes at swarna madam! Swarna Madam was absolutely amazing—she supported me at every step of the learning process. She helped me improve my vocabulary and speaking skills. She went above and beyond by offering extra classes and mock tests to ensure I was fully prepared. Initially, I was really anxious about the exam but with Swarna Madam's guidance, I was able to gain confidence and perform well. I highly recommend Swarna Madam to anyone preparing for NAATI in Telugu or Hindi. Her dedication, expertise, and teaching style make her an outstanding choice for anyone looking to achieve success.",
                                rating: 5,
                            },
                            {
                                name: "Student",
                                lang: "Telugu",
                                date: "",
                                quote: "I am incredibly grateful that I joined NAATI classes and had the opportunity to learn from Swarna madam. From the very beginning, Swarna madam was extremely supportive, guiding me at every step. Her teaching methods are exceptional, which greatly improved my vocabulary and speaking skills. I made sure to attend all of her classes, and the consistent practice, along with her extra mock tests and dedicated revision sessions, helped me build my confidence. Before joining, I was very nervous about the NAATI exam, unsure of how to prepare etc. However, Swarna madam's structured approach, patience, and personalized feedback ensured that I was fully prepared. I highly recommend Swarna madam to anyone looking to excel in NAATI Telugu—her expertise, dedication, and passion for teaching make her the perfect choice.",
                                rating: 5,
                            },
                        ].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="p-6 sm:p-8 rounded-3xl bg-amber-50/50 border border-amber-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                            >
                                <div className="flex mb-3 sm:mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-amber-400 text-lg sm:text-xl">
                      ★
                    </span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-amber-600 text-xs sm:text-sm font-medium">
                                        {testimonial.lang} CCL
                                    </div>
                                    {testimonial.date && (
                                        <div className="text-slate-500 text-xs mt-1">
                                            {testimonial.date}
                                        </div>
                                    )}
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
                  +91&nbsp;79894&nbsp;85645&nbsp;

                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-4">
                                <a
                                    href="tel:+917989485645"
                                    className="flex-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 sm:px-5 py-3 text-sm md:text-base font-semibold text-white transition-transform duration-150 hover:scale-[1.02]"
                                >
                                    Call to Get Started
                                </a>

                                <button
                                    type="button"
                                    onClick={async () => {
                                        try {
                                            await navigator.clipboard.writeText("+917989485645");
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

                    <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-amber-100 text-[11px] sm:text-xs md:text-sm text-slate-500 space-y-2">
                        <p className="font-semibold text-slate-700">📅 Class Timings (IST - Indian Standard Time)</p>
                        <p>Monday to Saturday: Morning 9:00 AM - 10:00 AM</p>
                        <p>Monday to Saturday: Evening 5:00 PM - 6:00 PM</p>
                        <p className="pt-2">💬 WhatsApp / Voice / Google Meet classes in Hindi &amp; Telugu</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
