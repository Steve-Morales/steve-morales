import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaDownload, FaCheckCircle, FaArrowRight, FaLinkedin, FaLock, FaUnlock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

async function saveEmail(email) {
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

async function downloadPdf(path, filename) {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Download failed');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

const SCORECARD_BULLETS = [
    '12 recruiter checks scored in 5 minutes',
    'Diagnose exactly where you\'re leaking opportunities',
    '4 free quick-wins included — no purchase required',
    'Know what to fix before you change a single word',
];

const GUIDE_BULLETS = [
    'Exact headline formula + copy-paste AI prompts',
    'Full About-section template with worked example',
    'The 3rd-degree connection strategy that surfaces you',
    'The precise posting window LinkedIn rewards most',
    'One-page 30-day checklist to run the whole system',
];

export default function LinkedInGuide() {
    return (
        <div className="bg-gray-950 min-h-screen">
            <Helmet>
                <title>LinkedIn Playbook for Software Engineers | Steve Morales</title>
                <meta name="description" content="Free LinkedIn scorecard + full 30-day playbook for entry and mid-level software engineers. Make recruiters come to you." />
                <link rel="canonical" href="https://stevemorales.dev/linkedin-guide" />
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="py-20 px-8 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                    <FaLinkedin className="text-blue-400" />
                    <span className="text-blue-300 text-sm font-medium">For Entry & Mid-Level Software Engineers</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Stop cold-applying.<br />
                    <span className="text-blue-400">Make recruiters come to you.</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    A repeatable, 30-day LinkedIn system built and battle-tested by a DoD software engineer. Real recruiter InMails and 2-3 referrals in about a month.
                </p>

                {/* Social proof strip */}
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {[
                        { value: '2,323', label: 'Profile views in 90 days' },
                        { value: '90+', label: 'Recruiter visits' },
                        { value: '2-3', label: 'Referrals in ~1 month' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center">
                            <div className="text-3xl font-extrabold text-white">{value}</div>
                            <div className="text-gray-400 text-sm mt-1">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products */}
            <section className="pb-24 px-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                    <ScorecardCard />
                    <GuideCard />
                </div>
            </section>

            <Footer />
        </div>
    );
}

function ScorecardCard() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
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
            await downloadPdf('/LinkedIn_Scorecard_Free.pdf', 'LinkedIn_Scorecard_Free.pdf');
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMsg('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden flex flex-col h-full">
            {/* Badge */}
            <div className="bg-green-500/10 border-b border-green-500/20 px-6 py-2 flex items-center gap-2">
                <FaUnlock className="text-green-400 text-sm" />
                <span className="text-green-400 font-semibold text-sm tracking-wide">FREE — EMAIL REQUIRED</span>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <h2 className="text-2xl font-extrabold text-white mb-1">The 5-Minute Self-Audit</h2>
                <p className="text-gray-400 text-sm mb-6">Why aren't recruiters messaging you?</p>

                <ul className="space-y-3 mb-8">
                    {SCORECARD_BULLETS.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-gray-300">
                            <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>

                {status === 'success' ? (
                    <div className="mt-auto bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                        <FaCheckCircle className="text-green-400 text-3xl mx-auto mb-3" />
                        <p className="text-white font-bold text-lg mb-1">Download started!</p>
                        <p className="text-gray-400 text-sm">Check your downloads for <span className="text-green-400">LinkedIn_Scorecard_Free.pdf</span></p>
                        <button
                            onClick={() => downloadPdf('/LinkedIn_Scorecard_Free.pdf', 'LinkedIn_Scorecard_Free.pdf')}
                            className="mt-4 text-green-400 hover:text-green-300 text-sm underline underline-offset-2 transition-colors"
                        >
                            Download again
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-auto space-y-3">
                        <label className="block text-gray-400 text-sm mb-1">Enter your email to download</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                            placeholder="you@example.com"
                            required
                            className="w-full bg-gray-800 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-200"
                        />
                        {errorMsg && (
                            <p className="text-red-400 text-sm">{errorMsg}</p>
                        )}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
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
                        <p className="text-gray-500 text-xs text-center">No spam. Just the PDF. Unsubscribe anytime.</p>
                    </form>
                )}
            </div>
        </div>
    );
}

function GuideCard() {
    return (
        <div className="bg-gray-900 rounded-2xl border border-blue-500/40 overflow-hidden flex flex-col h-full relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none rounded-2xl" />

            {/* Badge */}
            <div className="bg-blue-500/10 border-b border-blue-500/20 px-6 py-2 flex items-center gap-2">
                <FaLock className="text-blue-400 text-sm" />
                <span className="text-blue-400 font-semibold text-sm tracking-wide">PAID — FULL PLAYBOOK</span>
            </div>

            <div className="relative p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-1">
                    <h2 className="text-2xl font-extrabold text-white">Playing the LinkedIn Game</h2>
                </div>
                <p className="text-gray-400 text-sm mb-6">The complete 30-day field guide</p>

                <ul className="space-y-3 mb-8">
                    {GUIDE_BULLETS.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-gray-300">
                            <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>

                {/* Recruiter proof */}
                <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 mb-8">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-semibold">Written by someone who ran it</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        "Within about a month, recruiters were landing in my inbox with real roles — Microsoft SWE, high-frequency trading, test engineering — and I picked up 2-3 referrals."
                    </p>
                    <p className="text-blue-400 text-sm mt-2 font-medium">— Steve Morales, DoD Software Engineer</p>
                </div>

                <a
                    href="https://stevemojo4.gumroad.com/l/RecruiterMagnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                    Get the Full Playbook
                    <FaArrowRight />
                </a>
                <p className="text-gray-500 text-xs text-center mt-3">Sold on Gumroad. Instant PDF download.</p>
            </div>
        </div>
    );
}
