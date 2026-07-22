import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import useAuthStore from "../store/authStore";

export default function AuthProvider({ children }: {children: any}) {
  const setSession = useAuthStore((state) => state.setSession);
  const setLoading = useAuthStore((state) => state.setLoading);
  const clearSession = useAuthStore((state) => state.clearSession);

  useEffect(() => {
    initialize();
    setLoading(true)
    const {
        
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth Event:", event);

      if (session) {
        console.log(session)
        setSession(session);
      } else {
        clearSession();
      }

      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function initialize() {


    setLoading(true);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      setSession(session);
    } else {
      clearSession();
    }

    setLoading(false);
  }

  return children;
}