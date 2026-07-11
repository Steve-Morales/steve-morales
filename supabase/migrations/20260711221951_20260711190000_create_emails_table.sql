/*
# Create emails table

## Purpose
General-purpose email collection table for public-facing opt-in forms.
Emails are stored securely and viewable only from the Supabase dashboard
— no read policy is added, so the anon-key frontend cannot query the list.

## New Tables

### public.emails
- `id` (uuid, primary key) — auto-generated identifier via gen_random_uuid()
- `email` (text, not null, unique) — the submitted email address (duplicates silently rejected at DB level)
- `created_at` (timestamptz, default now()) — timestamp of submission

## Security
- RLS enabled on `emails`.
- INSERT policy only: `anon` and `authenticated` roles may insert rows with any
  email value. `WITH CHECK (true)` because this is a public, unauthenticated form.
- NO SELECT/UPDATE/DELETE policies are added intentionally.
  The email list is admin-only; it can only be read via the Supabase dashboard
  (service-role key bypasses RLS) or a privileged backend. Attempting to SELECT
  from the frontend anon-key client will return zero rows.

## Notes
1. UNIQUE constraint on `email` prevents exact duplicate addresses. If a
   duplicate is submitted the DB returns a 23505 conflict — the form component
   handles this gracefully with a "already subscribed" message.
2. This table is intentionally append-only from the frontend perspective.
3. No `source` column — use `email_leads` for source-tagged capture (scorecard, guide).
*/

CREATE TABLE IF NOT EXISTS emails (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  email      text        NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_emails" ON emails;
CREATE POLICY "anon_insert_emails" ON emails FOR INSERT
  TO anon, authenticated WITH CHECK (true);
