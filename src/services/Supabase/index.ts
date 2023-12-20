import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase: SupabaseClient = createClient(
  supabaseUrl as string | "",
  supabaseKey as string | "",
);
