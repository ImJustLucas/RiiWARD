import { supabase } from "@services/Supabase";

export class AuthServices {
  async signIn({ email, password }: { email: string; password: string }) {
    return await supabase.auth.signInWithPassword({ email, password });
  }

  async signUp({ email, password }: { email: string; password: string }) {
    return await supabase.auth.signUp({ email, password });
  }

  async signOut() {
    return await supabase.auth.signOut();
  }
}
