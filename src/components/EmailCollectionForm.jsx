import { useState } from 'react';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

console.log('[EmailForm] SUPABASE_URL:', SUPABASE_URL);
console.log('[EmailForm] SUPABASE_ANON_KEY present:', !!SUPABASE_ANON_KEY);
console.log('[EmailForm] SUPABASE_ANON_KEY first 20 chars:', SUPABASE_ANON_KEY ? SUPABASE_ANON_KEY.substring(0, 20) + '...' : 'UNDEFINED');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function insertEmail(email) {
    console.log('[EmailForm] insertEmail() called with email:', email);
    console.log('[EmailForm] Constructing fetch URL:', `${SUPABASE_URL}/rest/v1/emails`);
    console.log('[EmailForm] Request headers:', {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY ? '***present***' : '***MISSING***',
        Authorization: SUPABASE_ANON_KEY ? 'Bearer ***present***' : 'Bearer ***MISSING***',
        Prefer: 'return=minimal',
    });
    console.log('[EmailForm] Request body:', JSON.stringify({ email }));

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

    console.log('[EmailForm] Response received. Status:', res.status, 'StatusText:', res.statusText);
    console.log('[EmailForm] Response headers:', Object.fromEntries(res.headers.entries()));

    if (res.status === 409 || res.status === 422) {
        console.log('[EmailForm] Status is 409 or 422 — checking for duplicate');
        const body = await res.json().catch(() => ({}));
        console.log('[EmailForm] Response body parsed:', JSON.stringify(body));
        const isDupe =
            res.status === 409 ||
            (body.code === '23505') ||
            (typeof body.message === 'string' && body.message.includes('unique'));
        console.log('[EmailForm] isDupe evaluation:', isDupe);
        console.log('[EmailForm]   - res.status === 409:', res.status === 409);
        console.log('[EmailForm]   - body.code === "23505":', body.code === '23505');
        console.log('[EmailForm]   - body.message includes "unique":', typeof body.message === 'string' && body.message.includes('unique'));
        if (isDupe) {
            console.log('[EmailForm] Throwing duplicate error');
            throw Object.assign(new Error('already_subscribed'), { kind: 'duplicate' });
        }
    }

    if (!res.ok) {
        const text = await res.text().catch(() => '');
        console.log('[EmailForm] Response NOT OK. Status:', res.status, 'Body text:', text);
        throw new Error(text || `HTTP ${res.status}`);
    }

    console.log('[EmailForm] INSERT successful! Email saved to database.');
}

export default function EmailCollectionForm({ className = '' }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // null | 'success' | 'error'
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmed = email.trim();
        console.log('[EmailForm] handleSubmit() fired');
        console.log('[EmailForm] Raw email value:', JSON.stringify(email));
        console.log('[EmailForm] Trimmed email value:', JSON.stringify(trimmed));

        if (!trimmed) {
            console.log('[EmailForm] VALIDATION FAIL: trimmed email is empty');
            setStatus('error');
            setMessage('Please enter your email address.');
            return;
        }
        if (!EMAIL_RE.test(trimmed)) {
            console.log('[EmailForm] VALIDATION FAIL: email does not match regex. Value:', trimmed);
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        console.log('[EmailForm] Validation passed. Proceeding with insert...');
        setLoading(true);
        setStatus(null);
        setMessage('');

        try {
            console.log('[EmailForm] Calling insertEmail()...');
            await insertEmail(trimmed);
            console.log('[EmailForm] insertEmail() resolved successfully');
            setEmail('');
            setStatus('success');
            setMessage("You're on the list!");
            console.log('[EmailForm] Status set to SUCCESS');
        } catch (err) {
            console.log('[EmailForm] insertEmail() threw an error:', err);
            console.log('[EmailForm] Error message:', err.message);
            console.log('[EmailForm] Error kind:', err.kind);
            setStatus('error');
            if (err.kind === 'duplicate') {
                console.log('[EmailForm] Handling as DUPLICATE');
                setMessage("You're already subscribed.");
            } else {
                console.log('[EmailForm] Handling as GENERIC ERROR');
                setMessage('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
            console.log('[EmailForm] Loading set to false. Done.');
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
