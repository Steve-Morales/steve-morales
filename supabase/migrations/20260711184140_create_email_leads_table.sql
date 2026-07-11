/*
# Create email_leads table

## Purpose
Stores emails from users who request the free LinkedIn Scorecard PDF.
Also tracks any future email capture sources (e.g. guide waitlist).

## New Tables

### email_leads
- `id` (uuid, primary key) — auto-generated row identifier
- `email` (text, not null) — the email address provided by the visitor
- `source` (text, not null, default 'scorecard') — which asset triggered the capture (e.g. 'scorecard', 'guide')
- `created_at` (timestamptz) — when the record was created

## Security
- RLS enabled. No authentication required (public-facing lead capture page).
- SELECT, INSERT, UPDATE, DELETE scoped to `anon, authenticated` so the
  frontend anon-key client can insert rows freely.
- SELECT is intentionally open so we can query back leads from the frontend
  if ever needed (e.g. confirming duplicate email). Restrict later if
  admin-only viewing is desired.

## Notes
1. No duplicate-prevention constraint — intentionally allows the same email
   to appear multiple times (user may download again). Deduplication can be
   handled in queries if needed.
2. This is a single-tenant, no-auth app. USING (true) on all policies is
   correct here because all leads data is owned by the site admin (Steve),
   not individual visitors.
*/

CREATE TABLE IF NOT EXISTS email_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source text NOT NULL DEFAULT 'scorecard',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_email_leads" ON email_leads;
CREATE POLICY "anon_select_email_leads" ON email_leads FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_email_leads" ON email_leads;
CREATE POLICY "anon_insert_email_leads" ON email_leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_email_leads" ON email_leads;
CREATE POLICY "anon_update_email_leads" ON email_leads FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_email_leads" ON email_leads;
CREATE POLICY "anon_delete_email_leads" ON email_leads FOR DELETE
  TO anon, authenticated USING (true);
