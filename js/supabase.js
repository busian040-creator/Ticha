/*
  Ticha Supabase connection.
  1. Create a Supabase project.
  2. Copy Project URL and anon/publishable key from Project Settings > API.
  3. Replace the placeholders below.
  4. Keep Row Level Security enabled and apply supabase/schema.sql.
  NEVER put a service_role key or OpenAI API key in browser code.
*/
window.TICHA_CONFIG = {
  supabaseUrl: "YOUR_SUPABASE_PROJECT_URL",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY"
};

window.tichaSupabase = null;
window.tichaSupabaseReady = false;

(function initTichaSupabase() {
  const cfg = window.TICHA_CONFIG;
  const configured = cfg &&
    cfg.supabaseUrl.startsWith("https://") &&
    !cfg.supabaseUrl.includes("YOUR_SUPABASE") &&
    cfg.supabaseAnonKey &&
    !cfg.supabaseAnonKey.includes("YOUR_SUPABASE");

  if (!configured || !window.supabase || !window.supabase.createClient) return;

  try {
    window.tichaSupabase = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
    window.tichaSupabaseReady = true;
  } catch (error) {
    console.error("Ticha Supabase initialization failed:", error);
  }
})();
    
