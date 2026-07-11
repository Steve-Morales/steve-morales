import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface PageViewData {
  page_path: string;
  referrer?: string;
  user_agent?: string;
  session_id?: string;
  device_type?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (req.method === "POST") {
      const data: PageViewData = await req.json();

      const ipAddress = req.headers.get("x-forwarded-for") || "unknown";
      const hashedIp = await hashString(ipAddress);

      const { error: insertError } = await supabase
        .from("page_views")
        .insert({
          page_path: data.page_path,
          referrer: data.referrer,
          user_agent: data.user_agent,
          ip_address: hashedIp,
          session_id: data.session_id,
          device_type: data.device_type,
        });

      if (insertError) {
        throw insertError;
      }

      if (data.session_id) {
        const { data: session } = await supabase
          .from("visitor_sessions")
          .select("id, total_page_views")
          .eq("id", data.session_id)
          .maybeSingle();

        if (session) {
          await supabase
            .from("visitor_sessions")
            .update({
              last_seen: new Date().toISOString(),
              total_page_views: session.total_page_views + 1,
            })
            .eq("id", data.session_id);
        } else {
          await supabase
            .from("visitor_sessions")
            .insert({
              id: data.session_id,
              total_page_views: 1,
            });
        }
      }

      return new Response(
        JSON.stringify({ success: true }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (req.method === "GET") {
      const url = new URL(req.url);
      const type = url.searchParams.get("type") || "views";
      const days = parseInt(url.searchParams.get("days") || "7");

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      if (type === "views") {
        const { data: views, error } = await supabase
          .from("page_views")
          .select("page_path, viewed_at")
          .gte("viewed_at", startDate.toISOString())
          .order("viewed_at", { ascending: false });

        if (error) throw error;

        return new Response(
          JSON.stringify({ views, total: views?.length || 0 }),
          {
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (type === "stats") {
        const { count: totalViews } = await supabase
          .from("page_views")
          .select("*", { count: "exact", head: true })
          .gte("viewed_at", startDate.toISOString());

        const { count: totalSessions } = await supabase
          .from("visitor_sessions")
          .select("*", { count: "exact", head: true })
          .gte("last_seen", startDate.toISOString());

        const { data: topPages } = await supabase
          .from("page_views")
          .select("page_path")
          .gte("viewed_at", startDate.toISOString());

        const pageCounts = topPages?.reduce((acc: Record<string, number>, view) => {
          acc[view.page_path] = (acc[view.page_path] || 0) + 1;
          return acc;
        }, {});

        const topPagesArray = Object.entries(pageCounts || {})
          .map(([path, count]) => ({ path, count }))
          .sort((a, b) => (b.count as number) - (a.count as number))
          .slice(0, 10);

        return new Response(
          JSON.stringify({
            totalViews,
            totalSessions,
            topPages: topPagesArray,
            days,
          }),
          {
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

async function hashString(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
