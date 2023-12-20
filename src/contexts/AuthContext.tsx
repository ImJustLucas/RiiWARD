import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { UsersServices } from "@services/api";
import { supabase } from "@services/Supabase";
import { User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const _UsersServices = new UsersServices();

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    _UsersServices
      .getSession()
      .then((session) => {
        setUser(session.user || null);
      })
      .catch((err) => {
        console.error("@useAuth", err);
      })
      .finally(() => {
        setLoading(false);
      });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
