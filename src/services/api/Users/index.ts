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
      console.error(error);
    }

    return { session, user };
  }

  async update(data: UserAttributes) {
    return await supabase.auth.updateUser(data);
  }

  async getUserById(id: string) {
    const { data, error } = await supabase
      .from("aw_users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
    }

    return data;
  }

  async getAllUsers() {
    const { data, error } = await supabase.from("aw_users").select("*");

    if (error) {
      console.error(error);
    }

    return data;
  }
}
