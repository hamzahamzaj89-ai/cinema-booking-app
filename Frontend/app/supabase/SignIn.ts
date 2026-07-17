import { supabase } from "../lib/supabase";


interface Props  {
    email:string;
    password: string;
    
}


export async function signIn({email, password}: Props) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) throw error;

  return data;
}