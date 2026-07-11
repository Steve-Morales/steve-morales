import { useState } from 'react';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function insertEmail(email) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/emails`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email }),
    });

    if (res.status === 409 || res.status === 422) {
        const body = await res.json().catch(() => ({}));
        const isDupe =
            res.status === 409 ||
            (body.code === '23505') ||
            (typeof body.message === 'string' && body.message.includes('unique'));
        if (isDupe) {
            throw Object.assign(new Error('already_subscribed'), { kind: 'duplicate' });
        }
    }

    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `HTTP ${res.status}`);
    }
}

export default function EmailCollectionForm({ className = '' }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // null | 'success' | 'error'
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmed = email.trim();

        if (!trimmed) {
            setStatus('error');
            setMessage('Please enter your email address.');
            return;
        }
        if (!EMAIL_RE.test(trimmed)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        setStatus(null);
        setMessage('');

        try {
            await insertEmail(trimmed);
            setEmail('');
            setStatus('success');
            setMessage("You're on the list!");
        } catch (err) {
            setStatus('error');
            if (err.kind === 'duplicate') {
                setMessage("You're already subscribed.");
            } else {
                setMessage('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className={className}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '24rem' }}
        >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={loading}
                    aria-label="Email address"
                    style={{ flex: 1, padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid #d1d5db', fontSize: '0.875rem' }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{ padding: '0.5rem 1rem', borderRadius: '0.375rem', background: '#2563eb', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '0.875rem', opacity: loading ? 0.7 : 1 }}
                >
                    {loading ? 'Saving…' : 'Subscribe'}
                </button>
            </div>

            {message && (
                <p
                    role="status"
                    style={{
                        margin: 0,
                        fontSize: '0.8125rem',
                        color: status === 'success' ? '#16a34a' : '#dc2626',
                    }}
                >
                    {message}
                </p>
            )}
        </form>
    );
}
