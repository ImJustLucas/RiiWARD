import { useEffect, useState } from "react";
import { UsersServices } from "@services/api";
import { supabase } from "@services/Supabase";
import { User } from "@supabase/supabase-js";

const _UsersServices = new UsersServices();

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const userSession = await _UsersServices.getSession();
      setUser(userSession.user || null);
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return user;
};
