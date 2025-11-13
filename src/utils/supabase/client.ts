import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Singleton instance
let supabaseInstance: ReturnType<typeof createSupabaseClient> | null = null;

export function createClient() {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co`;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase configuration');
  }

  supabaseInstance = createSupabaseClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}
