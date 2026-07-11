const SUPABASE_URL =
  process.env.REACT_APP_SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  'https://cltnsvzrxcvywraldwtm.supabase.co';

const SUPABASE_ANON_KEY =
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdG5zdnpyeGN2eXdyYWxkd3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3ODQxMDAsImV4cCI6MjA5OTM2MDEwMH0.q520g_oIox7tDHpDie3y17ZZTvbr9Qv9w04OEm49nPY';
const ANALYTICS_ENDPOINT = `${SUPABASE_URL}/functions/v1/track-analytics`;

function getOrCreateSessionId() {
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
}

function getDeviceType() {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export async function trackPageView(pagePath) {
  try {
    const sessionId = getOrCreateSessionId();
    const deviceType = getDeviceType();

    await fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        page_path: pagePath,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        session_id: sessionId,
        device_type: deviceType,
      }),
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

export async function getAnalyticsStats(days = 7) {
  try {
    const response = await fetch(
      `${ANALYTICS_ENDPOINT}?type=stats&days=${days}`,
      {
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return null;
  }
}
