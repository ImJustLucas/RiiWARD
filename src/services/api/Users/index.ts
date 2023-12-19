import { supabase } from "@services/Supabase";
import { UserAttributes } from "@supabase/supabase-js";

export class UsersServices {
  async me() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  }

  async getSession() {
    const { data, error } = await supabase.auth.refreshSession();
    const { session, user } = data;

    if (error) {
      throw error;
    }

    return { session, user };
  }

  async update(data: UserAttributes) {
    return await supabase.auth.updateUser(data);
  }
}
