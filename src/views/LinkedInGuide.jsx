import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FaDownload, FaCheckCircle, FaArrowRight, FaLinkedin,
    FaLock, FaUnlock, FaEnvelope, FaChartLine, FaUsers,
    FaRocket, FaBullseye,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

async function saveEmail(email) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.warn('Supabase env vars not configured — skipping email save');
        return;
    }
    const res = await fetch(`${SUPABASE_URL}/rest/v1/email_leads`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email, source: 'scorecard' }),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
    }
}

function triggerDownload(path, filename) {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function useCountUp(target, duration = 1500, shouldStart = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!shouldStart) return;
        const start = performance.now();
        const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [target, duration, shouldStart]);
    return count;
}

function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);
    return [ref, inView];
}

function AnimatedStat({ value, suffix = '', label, started }) {
    const count = useCountUp(value, 1400, started);
    return (
        <div className="text-center px-6">
            <div className="text-4xl lg:text-5xl font-extrabold text-white tabular-nums">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-gray-400 text-sm mt-2 font-medium">{label}</div>
        </div>
    );
}

const PHASES = [
    {
        num: 1,
        label: 'WEEK 1',
        title: 'Build the Profile',
        desc: 'Headline, About section, Open-to-work & location, banner and photo — what recruiters actually see first.',
        icon: FaBullseye,
        color: 'from-orange-500 to-red-500',
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10',
    },
    {
        num: 2,
        label: 'WEEK 1-2',
        title: 'Build the Network',
        desc: 'Cross 500+ connections, then get strategic about whose network you\'re in — the 3rd-degree secret.',
        icon: FaUsers,
        color: 'from-blue-500 to-cyan-500',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
    },
    {
        num: 3,
        label: 'WEEK 2-4',
        title: 'Engage the Algorithm',
        desc: 'Comment with intent, work the InMail math, order your skills. Signal you\'re a live, responsive candidate.',
        icon: FaChartLine,
        color: 'from-green-500 to-emerald-500',
        border: 'border-green-500/30',
        bg: 'bg-green-500/10',
    },
    {
        num: 4,
        label: 'WEEK 2-4',
        title: 'Post & Showcase',
        desc: 'One weekly post at the right time window, plus a Featured section that closes the deal with recruiters.',
        icon: FaRocket,
        color: 'from-purple-500 to-pink-500',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
    },
];

const SCORECARD_BULLETS = [
    '12 recruiter checks scored in 5 minutes',
    'Diagnose exactly where you\'re leaking opportunities',
    '4 free quick-wins — no purchase required',
    'Know what to fix before changing a single word',
];

const GUIDE_BULLETS = [
    'Exact headline formula + copy-paste AI prompts',
    'Full About-section template with a worked example',
    '3rd-degree connection strategy for recruiter proximity',
    'Why recruiters only send 30 InMails/month — and how to be the safe bet',
    'The precise posting window LinkedIn rewards most',
    'One-page 30-day checklist to run the whole system',
];

export default function LinkedInGuide() {
    const [statsRef, statsInView] = useInView(0.3);
    const [phasesRef, phasesInView] = useInView(0.1);
    const [productsRef, productsInView] = useInView(0.1);

    return (
        <div className="bg-gray-950 min-h-screen overflow-x-hidden">
            <Helmet>
                <title>LinkedIn Playbook for Software Engineers | Steve Morales</title>
                <meta name="description" content="Free LinkedIn scorecard + full 30-day playbook for entry and mid-level software engineers. Make recruiters come to you." />
                <link rel="canonical" href="https://stevemorales.dev/linkedin-guide" />
            </Helmet>
            <Navbar />

            <HeroSection />

            {/* Stats strip */}
            <section ref={statsRef} className="py-16 border-y border-gray-800 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
                />
                <div className="relative max-w-4xl mx-auto px-8">
                    <p className="text-center text-gray-500 text-xs uppercase tracking-widest font-semibold mb-10">Results from running this system on a real profile</p>
                    <div className="flex flex-wrap justify-center gap-8 divide-x divide-gray-800">
                        <AnimatedStat value={2323} label="Profile views in 90 days" started={statsInView} />
                        <AnimatedStat value={90} suffix="+" label="Recruiter visits" started={statsInView} />
                        <AnimatedStat value={3} label="Referrals in ~1 month" started={statsInView} />
                        <AnimatedStat value={30} label="Days to run the full system" started={statsInView} />
                    </div>
                </div>
            </section>

            {/* 4-Phase System */}
            <section ref={phasesRef} className="py-24 px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold">Inside the full playbook</span>
                        <h2 className="text-4xl font-extrabold text-white mt-3">Four phases. One month.</h2>
                        <p className="text-gray-400 mt-3 max-w-xl mx-auto">The order matters. A great profile with no network is invisible. A big network with a weak profile wastes it.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {PHASES.map((phase, i) => (
                            <PhaseCard
                                key={phase.num}
                                phase={phase}
                                visible={phasesInView}
                                delay={i * 80}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section ref={productsRef} className="pb-28 px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-white">Get started today</h2>
                        <p className="text-gray-400 mt-3">Start free. Upgrade when you're ready to run the full system.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <ScorecardCard visible={productsInView} />
                        <GuideCard visible={productsInView} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function HeroSection() {
    const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => {
            setDotPos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden px-8 py-24">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 transition-transform duration-700 ease-out"
                    style={{
                        background: `radial-gradient(ellipse 70% 60% at ${50 + dotPos.x * 0.3}% ${45 + dotPos.y * 0.3}%, rgba(59,130,246,0.18) 0%, transparent 65%)`,
                    }}
                />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 80% 20%, rgba(99,102,241,0.08) 0%, transparent 60%)' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 30% at 10% 80%, rgba(20,184,166,0.07) 0%, transparent 60%)' }} />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Floating badges */}
            <FloatingBadge text="90+ Recruiters Found Me" style={{ top: '18%', left: '8%' }} delay={0} color="blue" />
            <FloatingBadge text="Microsoft InMail" style={{ top: '28%', right: '7%' }} delay={600} color="teal" />
            <FloatingBadge text="2-3 Referrals/Month" style={{ bottom: '25%', left: '6%' }} delay={1200} color="green" />
            <FloatingBadge text="0 Cold Applications" style={{ bottom: '22%', right: '8%' }} delay={400} color="orange" />

            <div className="relative text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-5 py-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <FaLinkedin className="text-blue-400 text-sm" />
                    <span className="text-blue-300 text-sm font-medium">For Entry & Mid-Level Software Engineers</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.07] tracking-tight">
                    Stop cold-applying.<br />
                    <span
                        className="relative"
                        style={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #60a5fa 100%)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'gradientShift 4s ease infinite',
                        }}
                    >
                        Make recruiters find you.
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                    A repeatable, 30-day LinkedIn playbook built and battle-tested by a DoD software engineer. Real recruiter InMails and referrals in about a month.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#get-started"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg"
                    >
                        Get Started Free <FaArrowRight />
                    </a>
                    <a
                        href="https://stevemojo4.gumroad.com/l/RecruiterMagnet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg"
                    >
                        View Full Playbook
                    </a>
                </div>

                <p className="text-gray-600 text-sm mt-6">No fluff. No AI slop. Written by someone who ran it.</p>
            </div>

            <style>{`
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
}

function FloatingBadge({ text, style, delay, color }) {
    const colors = {
        blue: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
        teal: 'border-teal-500/30 bg-teal-500/10 text-teal-300',
        green: 'border-green-500/30 bg-green-500/10 text-green-300',
        orange: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
    };
    return (
        <div
            className={`hidden lg:flex absolute items-center gap-2 border rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm ${colors[color]}`}
            style={{
                ...style,
                animation: `float ${3 + delay * 0.002}s ease-in-out infinite`,
                animationDelay: `${delay}ms`,
            }}
        >
            <FaCheckCircle className="opacity-70" />
            {text}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
            `}</style>
        </div>
    );
}

function PhaseCard({ phase, visible, delay }) {
    const Icon = phase.icon;
    return (
        <div
            className={`border ${phase.border} ${phase.bg} rounded-2xl p-6 transition-all duration-700 hover:border-opacity-60 hover:-translate-y-1 hover:shadow-xl`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
            }}
        >
            <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="text-white text-lg" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-white font-extrabold text-lg">Phase {phase.num}</span>
                        <span className={`text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-gradient-to-r ${phase.color} text-white`}>
                            {phase.label}
                        </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{phase.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
                </div>
            </div>
        </div>
    );
}

function ScorecardCard({ visible }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setErrorMsg('Please enter a valid email address.');
            return;
        }
        setStatus('loading');
        setErrorMsg('');
        try {
            await saveEmail(email.trim().toLowerCase());
            triggerDownload('/LinkedIn_Scorecard_Free.pdf', 'LinkedIn_Scorecard_Free.pdf');
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMsg('Something went wrong. Please try again.');
        }
    };

    return (
        <div
            id="get-started"
            className="relative rounded-2xl overflow-hidden flex flex-col"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 0.7s ease 0ms, transform 0.7s ease 0ms',
                background: 'linear-gradient(145deg, #111827 0%, #0f1a0f 100%)',
                border: '1px solid rgba(34,197,94,0.3)',
                boxShadow: '0 0 40px rgba(34,197,94,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
        >
            {/* Top glow line */}
            <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.8), transparent)' }} />

            {/* Header badge */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-green-500/15">
                <FaUnlock className="text-green-400 text-xs" />
                <span className="text-green-400 font-bold text-xs tracking-widest uppercase">Free Download</span>
                <span className="ml-auto text-green-300 font-extrabold text-sm">$0</span>
            </div>

            <div className="p-7 flex flex-col flex-1">
                <div className="mb-5">
                    <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-2">The 5-Minute Self-Audit</p>
                    <h2 className="text-3xl font-extrabold text-white leading-tight">Why aren't recruiters messaging you?</h2>
                    <p className="text-gray-400 text-sm mt-2">Score your profile against the 12 checks recruiters actually filter on.</p>
                </div>

                <ul className="space-y-3 mb-7">
                    {SCORECARD_BULLETS.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                                <FaCheckCircle className="text-green-400 text-[10px]" />
                            </span>
                            <span className="text-gray-300 text-sm">{b}</span>
                        </li>
                    ))}
                </ul>

                {status === 'success' ? (
                    <div className="mt-auto rounded-xl p-6 text-center" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}>
                        <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                            <FaCheckCircle className="text-green-400 text-2xl" />
                        </div>
                        <p className="text-white font-bold text-lg mb-1">Download started!</p>
                        <p className="text-gray-400 text-sm">Check downloads for <span className="text-green-400 font-medium">LinkedIn_Scorecard_Free.pdf</span></p>
                        <button
                            onClick={() => triggerDownload('/LinkedIn_Scorecard_Free.pdf', 'LinkedIn_Scorecard_Free.pdf')}
                            className="mt-4 text-green-400 hover:text-green-300 text-sm underline underline-offset-2 transition-colors"
                        >
                            Download again
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-auto space-y-3">
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">
                            <FaEnvelope className="inline mr-2 opacity-70" />
                            Enter your email to unlock
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                                placeholder="you@example.com"
                                required
                                className="w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none text-sm transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: errorMsg ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: email ? '0 0 0 2px rgba(34,197,94,0.15)' : 'none',
                                }}
                                onFocus={(e) => { e.target.style.border = '1px solid rgba(34,197,94,0.5)'; }}
                                onBlur={(e) => { e.target.style.border = errorMsg ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.08)'; }}
                            />
                        </div>
                        {errorMsg && <p className="text-red-400 text-xs">{errorMsg}</p>}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.99]"
                            style={{
                                background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                                boxShadow: '0 4px 20px rgba(22,163,74,0.3)',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(22,163,74,0.45)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(22,163,74,0.3)'; }}
                        >
                            {status === 'loading' ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <FaDownload />
                                    Get Free Scorecard
                                </>
                            )}
                        </button>
                        <p className="text-gray-600 text-xs text-center">No spam. One PDF. Unsubscribe anytime.</p>
                    </form>
                )}
            </div>
        </div>
    );
}

function GuideCard({ visible }) {
    return (
        <div
            className="relative rounded-2xl overflow-hidden flex flex-col"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 0.7s ease 120ms, transform 0.7s ease 120ms',
                background: 'linear-gradient(145deg, #0f172a 0%, #0c1628 100%)',
                border: '1px solid rgba(59,130,246,0.35)',
                boxShadow: '0 0 60px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
        >
            {/* Top glow line */}
            <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.9), rgba(99,102,241,0.7), transparent)' }} />

            {/* Header badge */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-blue-500/15">
                <FaLock className="text-blue-400 text-xs" />
                <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">Full Playbook</span>
                <span className="ml-auto bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold px-2.5 py-0.5 rounded-full">Paid</span>
            </div>

            <div className="p-7 flex flex-col flex-1">
                <div className="mb-5">
                    <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">The Field Guide</p>
                    <h2 className="text-3xl font-extrabold text-white leading-tight">Playing the LinkedIn Game</h2>
                    <p className="text-gray-400 text-sm mt-2">The complete 30-day system — everything in order, ready to run.</p>
                </div>

                <ul className="space-y-3 mb-7">
                    {GUIDE_BULLETS.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                                <FaCheckCircle className="text-blue-400 text-[10px]" />
                            </span>
                            <span className="text-gray-300 text-sm">{b}</span>
                        </li>
                    ))}
                </ul>

                {/* Inline proof */}
                <div className="rounded-xl p-4 mb-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">SM</div>
                        <div>
                            <p className="text-white text-xs font-semibold">Steve Morales</p>
                            <p className="text-gray-500 text-xs">DoD Software Engineer, CompTIA Security+</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed italic">
                        "Within a month, recruiters were landing in my inbox with real roles — Microsoft SWE, high-frequency trading, test engineering — and I picked up 2-3 referrals."
                    </p>
                </div>

                <a
                    href="https://stevemojo4.gumroad.com/l/RecruiterMagnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99]"
                    style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #4338ca 100%)',
                        boxShadow: '0 4px 24px rgba(37,99,235,0.35)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 32px rgba(37,99,235,0.5)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,99,235,0.35)'; }}
                >
                    Get the Full Playbook <FaArrowRight />
                </a>
                <p className="text-gray-600 text-xs text-center mt-3">Sold on Gumroad · Instant PDF download</p>
            </div>
        </div>
    );
}
