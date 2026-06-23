import { useState, useEffect } from "react";
import { 
  Shield, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  Loader2, 
  Coins, 
  ArrowUpRight,
  TrendingUp,
  Award,
  Lock,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Monetag Script & Redirect Configuration from .env with secure hardcoded fallbacks
const MAIN_SCRIPT_URL = import.meta.env.VITE_MONETAG_MAIN_SCRIPT_URL || "https://quge5.com/88/tag.min.js";
const IN_PAGE_PUSH_ZONE_ID = import.meta.env.VITE_MONETAG_IN_PAGE_PUSH_ZONE_ID || "11189726";
const PUSH_NOTIFICATION_ZONE_ID = import.meta.env.VITE_MONETAG_PUSH_NOTIFICATION_ZONE_ID || "11189728";
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || "https://omg10.com/4/11189647";

// Quiz steps
type Step = "intro" | "income" | "credit" | "analyzing" | "success";

export default function App() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState({
    income: "",
    creditScore: "",
  });
  
  const [progress, setProgress] = useState(0);
  const [loaderMessage, setLoaderMessage] = useState("Checking income bracket…");

  // Dynamic injection of all Monetag Agency Scripts
  useEffect(() => {
    // Loaded cleanly via index.html static script tags to prevent duplicate execution and script errors.
  }, []);

  // Simulating analysis progress
  useEffect(() => {
    if (step !== "analyzing") return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 3;
        if (next >= 100) {
          clearInterval(interval);
          setStep("success");
          return 100;
        }
        
        // Update loader details based on status
        if (next < 33) {
          setLoaderMessage("Checking income bracket…");
        } else if (next < 66) {
          setLoaderMessage("Matching with credit bureaus…");
        } else {
          setLoaderMessage("Finalising pre-approved bank list…");
        }
        
        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [step]);

  // Navigate back helper
  const handleBack = () => {
    if (step === "income") setStep("intro");
    else if (step === "credit") setStep("income");
  };

  // Execute Monetag final action and key redirect
  const handleRedirect = () => {
    // Trigger any popunder if possible, then open offer
    try {
      window.open(REDIRECT_URL, "_blank");
    } catch (e) {
      console.warn("Direct tab opener bypassed.", e);
    }
    window.location.href = REDIRECT_URL;
  };

  return (
    <div id="loan-app-container" className="min-h-screen bg-slate-50 text-slate-800 font-sans relative flex flex-col justify-between overflow-x-hidden">
      
      {/* ===== AMBIENT GRADIENT GLOW BACKGROUND ===== */}
      <div id="glow-blob-1" className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-100/40 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div id="glow-blob-2" className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-100/40 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />

      {/* ===== HEADER BAR ===== */}
      <header id="main-header" className="w-full max-w-lg mx-auto px-4 pt-4 sm:pt-6 pb-2 z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-100/80 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Secure Shield Badge */}
            <div id="shield-icon-container" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-600 shadow-sm shadow-emerald-50 shrink-0">
              <Shield className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5]" id="shield-svg" />
            </div>
            <div>
              <span id="sub-engine-label" className="text-[9px] sm:text-[10px] tracking-wider uppercase font-extrabold text-slate-400 block font-display">
                Credit Eligibility Engine
              </span>
              <h1 id="main-title-label" className="text-xs sm:text-sm font-extrabold text-slate-800 font-display">
                Special Loan Assessor
              </h1>
            </div>
          </div>
          
          <div id="connection-status-pill" className="flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-50 rounded-full border border-emerald-100 text-[10px] sm:text-[11px] font-semibold text-emerald-700 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="hidden xs:inline">Secure</span> Connection
          </div>
        </div>
      </header>

      {/* ===== MONETAG SPONSORED PROMO BANNER (TOP) ===== */}
      <div id="top-advert-widget" className="w-full max-w-lg mx-auto px-4 z-10 transition-all duration-300">
        <div className="bg-gradient-to-r from-emerald-50/80 to-blue-50/80 border border-blue-100/70 rounded-2xl p-3 flex sm:p-3.5 items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <span id="badge-promo" className="bg-emerald-600 text-white text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
              Ad Profile
            </span>
            <div className="flex flex-col">
              <span id="banner-title" className="text-[11px] sm:text-xs font-bold text-slate-700 line-clamp-1">Recommended Bank Credit offers</span>
              <span id="banner-caption" className="text-[9px] sm:text-[10px] text-slate-400 font-medium line-clamp-1">Earn payouts & high approval limits</span>
            </div>
          </div>
          <a
            href={REDIRECT_URL}
            onClick={handleRedirect}
            id="ad-action-link"
            className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px] font-bold text-blue-600 hover:text-blue-700 transition shrink-0 ml-1"
          >
            Explore <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ===== MAIN FORM CONTAINER ===== */}
      <main id="main-content-area" className="w-full max-w-lg mx-auto px-4 py-2 sm:py-4 flex-1 flex flex-col justify-center z-10">
        <div id="card-wrapper" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 sm:p-6 md:p-8 relative transition-all duration-300 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            {/* STEP 0: INTRO SCREEN */}
            {step === "intro" && (
              <motion.section
                key="intro"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                id="sec-intro"
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div id="secure-badge-intro" className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/80 rounded-lg text-[12px] font-semibold text-blue-700 border border-blue-100">
                    <Lock className="w-3.5 h-3.5" /> 100% Secure Assessment
                  </div>
                  
                  <h2 id="hero-heading" className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight leading-snug font-display">
                    Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">best Personal or Home Loan</span> options for your profile.
                  </h2>
                  <p id="hero-paragraph" className="text-xs sm:text-[14px] text-slate-500 leading-relaxed">
                    Please answer 2 basic questions to check pre‑approved loan plans from leading banks and public financial institutions. This assessment is completely free.
                  </p>
                </div>

                {/* Simulated native display ad content inside client area matching theme precisely */}
                <div id="sponsored-feed-ad-1" className="my-1 sm:my-2 bg-slate-50 border border-dashed border-slate-200 rounded-xl p-3 sm:p-4 text-center relative overflow-hidden">
                  <span className="absolute top-1.5 right-2 text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-slate-400">Sponsored Ad</span>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-extrabold font-display text-xs sm:text-sm shrink-0">$</div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-700 truncate">Global Platinum Credit Cards</h4>
                      <p className="text-[10px] text-slate-400 truncate">Zero annual fee & 5% instant cashbacks</p>
                    </div>
                    <a href={REDIRECT_URL} onClick={handleRedirect} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100 transition shrink-0 shadow-xs">
                      Apply
                    </a>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <button
                    onClick={() => setStep("income")}
                    id="btn-start"
                    className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-bold text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-200 outline-none active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    Start Eligibility Check
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                  <p id="time-estimate" className="text-[11px] text-slate-400 text-center font-semibold">
                    ⏱️ Time needed: Under 20 seconds
                  </p>
                </div>
              </motion.section>
            )}

            {/* STEP 1: INCOME */}
            {step === "income" && (
              <motion.section
                key="income"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5 flex-1 flex flex-col justify-between"
                id="sec-income"
              >
                <div className="space-y-4">
                  <div id="progress-header-income" className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question 1/2</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50/80 px-2 py-0.5 rounded">50% Complete</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-1/2 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug font-display">What is your current monthly income?</h3>

                  <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-1.5">
                    {[
                      "Less than $2,000",
                      "$2,000 – $4,000",
                      "$4,000 – $8,000",
                      "More than $8,000"
                    ].map((val) => (
                      <button
                        key={val}
                        onClick={() => {
                          setAnswers(prev => ({ ...prev, income: val }));
                          setStep("credit");
                        }}
                        className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/10 text-left font-semibold text-xs sm:text-sm md:text-base text-slate-700 flex justify-between items-center group transition-all duration-200 cursor-pointer"
                      >
                        <span>{val} {val.includes("$") ? "/ month" : ""}</span>
                        <span className="w-6 h-6 rounded-full border border-slate-200 bg-white flex items-center justify-center text-xs text-transparent group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                          ✓
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleBack}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-all outline-none"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Go Back
                  </button>
                </div>
              </motion.section>
            )}

            {/* STEP 2: CREDIT SCORE */}
            {step === "credit" && (
              <motion.section
                key="credit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5 flex-1 flex flex-col justify-between"
                id="sec-credit"
              >
                <div className="space-y-4">
                  <div id="progress-header-credit" className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question 2/2</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50/80 px-2 py-0.5 rounded">100% Complete</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-full transition-all duration-300"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug font-display">What is your current credit score approximately?</h3>

                  <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-1.5">
                    {[
                      { title: "🚀 Excellent (750+)", desc: "Instantly eligible without hurdles" },
                      { title: "👍 Good (650 – 750)", desc: "Acceptable by most banks" },
                      { title: "📈 Average (550 – 650)", desc: "May be available with extra conditions" },
                      { title: "❓ Don't know / Slightly poor", desc: "We'll still find options for you" }
                    ].map((opt) => (
                      <button
                        key={opt.title}
                        onClick={() => {
                          setAnswers(prev => ({ ...prev, creditScore: opt.title }));
                          setStep("analyzing");
                        }}
                        className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/10 text-left font-semibold text-slate-700 flex justify-between items-center group transition-all duration-200 cursor-pointer"
                      >
                        <div className="min-w-0 pr-2">
                          <span className="block text-xs sm:text-[15px] font-bold text-slate-800 truncate">{opt.title}</span>
                          <span className="text-xs font-normal text-slate-400 block pt-0.5">{opt.desc}</span>
                        </div>
                        <span className="w-6 h-6 rounded-full border border-slate-200 bg-white flex items-center justify-center text-xs text-transparent group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                          ✓
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleBack}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-all outline-none"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Go Back
                  </button>
                </div>
              </motion.section>
            )}

            {/* STEP 4: ANALYZING (LOADER) */}
            {step === "analyzing" && (
              <motion.section
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 flex-1 flex flex-col items-center justify-center text-center py-8"
                id="sec-analyzing"
              >
                <div className="relative w-28 h-28">
                  {/* Background Track Circle */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#f1f5f9"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    {/* Animated Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="url(#emerald-gradient)"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={263.89}
                      strokeDashoffset={263.89 - (263.89 * progress) / 100}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span id="counter-percent" className="text-2xl font-black text-slate-800 tracking-tight font-display">{progress}%</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Status</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 id="analyzing-heading" className="text-lg font-bold text-slate-800 font-display">Analyzing your profile…</h4>
                  <p id="analyzing-sub" className="text-sm text-emerald-600 font-semibold flex items-center justify-center gap-1.5 min-h-[1.5rem]" key={loaderMessage}>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {loaderMessage}
                  </p>
                </div>
              </motion.section>
            )}

            {/* STEP 5: SUCCESS / REDIRECT */}
            {step === "success" && (
              <motion.section
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="space-y-6 flex-1 flex flex-col justify-between"
                id="sec-success"
              >
                <div className="text-center space-y-4 py-3">
                  <div id="success-ring" className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mx-auto shadow-sm shadow-emerald-200">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 id="success-title" className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight font-display">
                      Congratulations! You are eligible 🎉
                    </h4>
                    <span id="success-badge" className="text-[10px] sm:text-xs text-emerald-600 font-extrabold px-3 py-1 bg-emerald-50 inline-block rounded-full border border-emerald-100 uppercase tracking-widest">
                      4 special bank loan offers unlocked
                    </span>
                  </div>

                  <p id="success-summary" className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm mx-auto">
                    Excellent matching! Based on your responses, you qualify for special quick-approval interest rates with simplified KYC processes. Click below to apply.
                  </p>
                </div>

                {/* Additional Sponsored banner inside Success stage for monetag focus */}
                <div id="sponsored-feed-ad-2" className="bg-gradient-to-r from-blue-50/50 to-emerald-50/30 border border-slate-100 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm font-display font-semibold text-xs shrink-0">
                    ADS
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h5 className="text-[11px] sm:text-[12px] font-bold text-slate-700 truncate">Pre-Qualified Credit Limit</h5>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 truncate">Up to $50,000 immediately transferable</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleRedirect}
                    id="btn-redirect"
                    className="w-full py-4 sm:py-5 px-6 min-h-[3.8rem] sm:min-h-[4.5rem] bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white rounded-2xl sm:rounded-[1.5rem] font-extrabold text-lg sm:text-xl text-center flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-100 shadow-emerald-200/50 outline-none active:scale-[0.99] transition-all duration-300 animate-pulse cursor-pointer"
                  >
                    Select Offer &amp; Apply
                    <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                  </button>
                  <p id="success-guarantee" className="text-[10px] text-slate-400 text-center font-semibold">
                    🛡️ No credit history impact • 1-minute digital disbursement validation
                  </p>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

        </div>
      </main>

      {/* ===== BOTTOM SPONSORED LINKS / MONETIZATION FOOTER RAIL ===== */}
      <section id="footer-ad-rail" className="w-full max-w-lg mx-auto px-4 pb-2 z-10 transition-all">
        <div className="bg-white rounded-2xl p-3 border border-slate-100 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-sm">
          <span className="font-bold uppercase tracking-wider text-[9px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
            Partner Networks
          </span>
          <div className="flex items-center gap-3">
            <a href={REDIRECT_URL} onClick={handleRedirect} className="hover:text-slate-600 underline">Premier Financial Partners</a>
            <span className="text-slate-200">•</span>
            <a href={REDIRECT_URL} onClick={handleRedirect} className="hover:text-slate-600 underline">Apex Credit &amp; Finance</a>
            <span className="text-slate-200">•</span>
            <a href={REDIRECT_URL} onClick={handleRedirect} className="hover:text-slate-600 underline">Monetag Ads</a>
          </div>
        </div>
      </section>

      {/* ===== LEGAL FOOTER ===== */}
      <footer id="footer-copyright" className="w-full text-center py-5 text-[11px] text-slate-400 font-semibold z-10 select-none">
        © 2026 Special Loan Matcher • Secure Banking Information Provider •{" "}
        <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>
      </footer>

    </div>
  );
}
