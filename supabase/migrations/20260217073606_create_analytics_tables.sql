/*
  # Create Analytics Tables

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key) - Unique identifier for each page view
      - `page_path` (text) - The URL path that was viewed
      - `referrer` (text) - The referring URL
      - `user_agent` (text) - Browser user agent string
      - `ip_address` (text) - Visitor IP address (hashed for privacy)
      - `session_id` (uuid) - Session identifier
      - `viewed_at` (timestamptz) - Timestamp of the page view
      - `country` (text) - Visitor country (optional)
      - `device_type` (text) - Device type (mobile, desktop, tablet)
    
    - `visitor_sessions`
      - `id` (uuid, primary key) - Unique session identifier
      - `first_seen` (timestamptz) - First time visitor was seen
      - `last_seen` (timestamptz) - Last activity timestamp
      - `total_page_views` (integer) - Number of pages viewed in session
  
  2. Security
    - Enable RLS on both tables
    - No public access policies (analytics data is private)
    - Only service role can write/read analytics data

  3. Indexes
    - Add indexes for common queries on page_path and viewed_at
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path text NOT NULL,
  referrer text,
  user_agent text,
  ip_address text,
  session_id uuid,
  viewed_at timestamptz DEFAULT now(),
  country text,
  device_type text
);

CREATE TABLE IF NOT EXISTS visitor_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_seen timestamptz DEFAULT now(),
  last_seen timestamptz DEFAULT now(),
  total_page_views integer DEFAULT 0
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_sessions ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_date ON page_views(viewed_at);
CREATE INDEX IF NOT EXISTS idx_page_views_session ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_last_seen ON visitor_sessions(last_seen);