const ANALYTICS_ENDPOINT = `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/track-analytics`;

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
        'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
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
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return null;
  }
}
