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
  isLogged: boolean;
  setUser: (user: User | null) => void;
  setIsLogged: (isLogged: boolean) => void;
}

const _UsersServices = new UsersServices();

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLogged: false,
  setUser: () => {},
  setIsLogged: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    _UsersServices
      .getSession()
      .then((session) => {
        if (session.user) {
          setUser(session.user);
          setIsLogged(true);
        }
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
    <AuthContext.Provider
      value={{ user, loading, isLogged, setUser, setIsLogged }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
