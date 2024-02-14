import { PostgrestError } from "@supabase/supabase-js";

export type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
};

export interface UserData {
  project: Array<User> | null;
  error: PostgrestError | null;
}
